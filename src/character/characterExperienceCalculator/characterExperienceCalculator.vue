<template>
<div class="">
  <div class="outterBorder roundBorder">
    <div class="innerBorder roundBorder title">
      ㆎ 숙소 경험치 계산기
    </div>
  </div>
  <div class="ControllerBox fullBox">
    <table class="ControllerTable">
      <colgroup>
        <col width="50%">
        <col width="50%">
      </colgroup>
      <tr>
        <th class="tableHeader">지휘관 레벨</th>
        <td>
          <div class="tableinput">
            <input type="number" v-model.number="commanderlevel">
          </div>
        </td>
      </tr>
      <tr>
        <th class="tableHeader">캐릭터 현재 레벨</th>
        <td>
          <div class="tableinput">
            <input type="number" v-model.number="currentlevel">
          </div>
        </td>
      </tr>
      <tr>
        <th class="tableHeader">캐릭터 현재 경험치</th>
        <td>
          <div class="tableinput">
            <input type="number" v-model.number="currentexp">
          </div>
        </td>
      </tr>
      <tr>
        <th class="tableHeader">캐릭터 목표 레벨</th>
        <td>
          <div class="tableinput">
            <input type="number" v-model.number="expectlevel">
          </div>
        </td>
      </tr>
      <tr>
        <th class="tableHeader">숙소에 배치된 함정 수</th>
        <td>
          <div class="tableinput">
            <select v-model.number="shipsinroom">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </td>
      </tr>
      <tr>
        <th class="tableHeader">숙소안락도</th>
        <td>
          <div class="tableinput">
            <input type="number" v-model.number="comfortpoint">
          </div>
        </td>
      </tr>
    </table>
    <div class="calculationButtonArea">
      <div>
        <button type="button" class="calculationButton" @click="calculateexp">계산</button>
      </div>
    </div>
  </div>
  <div class="resultBox">
    <div class="warningBox" v-if="warningmessage != ''">
      {{ warningmessage }}
    </div>
    <div class="" v-if="warningmessage == ''">
      <table class="resultTable" v-if="fooddata">
        <tr>
          <th class="tableHeader" colspan="3">총 필요 경험치량</th><th class="tableHeader" colspan="2">시간당 경험치 획득량</th>
        </tr>
        <tr>
          <td colspan="3">{{ remainingexp }}</td><td colspan="2">{{ normalexp }}</td>
        </tr>
        <tr>
          <th class="tableHeader">음식</th><th class="tableHeader">필요량</th><th class="tableHeader">시간당 경험치 획득량(음식버프有)</th><th class="tableHeader">예상 시간</th><th class="tableHeader">예상 자원소모</th>
        </tr>
        <tr v-for="result in foodresult">
          <td>{{ result.foodname }}</td><td>{{ result.resultquantity }}</td><td>{{ result.buffedexp }}</td><td>{{ result.resulttimehour }}시간 {{ result.resulttimemin }}분</td><td>{{ result.fueluseage }} {{ result.fueltype }}</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      commanderlevel: null,
      currentlevel: null,
      currentexp: null,
      expectlevel: null,
      shipsinroom: null,
      comfortpoint: null,
      currentleveldata: null,
      expectleveldata: null,
      populationdata: null,
      remainingexp: null,
      fooddata: null,
      foodresult: [],
      normalexp: null,
      warningmessage: ""
    }
  },
  mounted() {
    this.commanderlevel = parseInt(localStorage.getItem("expcalcommandlv"))
    this.currentlevel = parseInt(localStorage.getItem("expcalcurrentlv"))
    this.currentexp = parseInt(localStorage.getItem("expcalcurrentexp"))
    this.expectlevel = parseInt(localStorage.getItem("expcalexpectlv"))
    this.shipsinroom = parseInt(localStorage.getItem("expcalshipsinroom"))
    this.comfortpoint = parseInt(localStorage.getItem("expcalcomfortpoint"))
  },
  methods: {
    calculateexp() {
      this.foodresult = []
      this.warningmessage = ""
      localStorage.setItem("expcalcommandlv", JSON.stringify(this.commanderlevel))
      localStorage.setItem("expcalcurrentlv", JSON.stringify(this.currentlevel))
      localStorage.setItem("expcalcurrentexp", JSON.stringify(this.currentexp))
      localStorage.setItem("expcalexpectlv", JSON.stringify(this.expectlevel))
      localStorage.setItem("expcalshipsinroom", JSON.stringify(this.shipsinroom))
      localStorage.setItem("expcalcomfortpoint", JSON.stringify(this.comfortpoint))
      if (isNaN(this.commanderlevel) || isNaN(this.currentlevel) || isNaN(this.currentexp) || isNaN(this.expectlevel) || isNaN(this.comfortpoint) || isNaN(this.shipsinroom)) {
        this.warningmessage = "입력칸에는 숫자만 입력해주세요"
        return
      }
      if (this.currentlevel > 100 || this.currentlevel < 1 || this.expectlevel > 100 || this.expectlevel < 1) {
        this.warningmessage = "캐릭터 레벨은 1에서 100사이로 입력해주세요"
        return
      }
      if (this.currentlevel >= this.expectlevel) {
        this.warningmessage = "목표 레벨이 현재 레벨보다 같거나 작습니다"
        return
      }
      let self = this
      this.$http.post("/characterexp", {
        currentlevel: this.currentlevel,
        currentexp: this.currentexp,
        expectlevel: this.expectlevel,
        shipsinroom: this.shipsinroom,
      }).then(function(result) {
        self.populationdata = result.data[0][0]
        self.currentleveldata = result.data[1][0]
        self.expectleveldata = result.data[2][0]
        self.fooddata = result.data[3]
        self.remainingexp = self.expectleveldata.stackedexp - self.currentleveldata.stackedexp - self.currentexp
        let comfortbuff = (self.comfortpoint / (self.comfortpoint + 100)) + 1
        console.log("comfortbuff" + comfortbuff);
        let basicexppermin = (self.commanderlevel * 12 + 240) / 60
        console.log("basicexppermin" + basicexppermin);
        let actualexpplain = basicexppermin * self.populationdata.roomexpratio * comfortbuff
        console.log("actualexpplain" + actualexpplain);
        self.normalexp = Math.floor(actualexpplain * 60)
        let buffedexp = 0
        let normalexp = 0
        let totalexp = 0
        let timerequired = 0
        let additionaltime = 0
        let actualexpbuffed = 0
        for (let i = 0; i < self.fooddata.length; i++) {
          actualexpbuffed = self.fooddata[i].foodbuff * actualexpplain
          let fooddepletetime = self.fooddata[i].foodpoint / self.populationdata.foodusepermin
          if (fooddepletetime > self.fooddata[i].foodbufftime) {
            buffedexp = actualexpplain * self.fooddata[i].foodbuff * self.fooddata[i].foodbufftime
            normalexp = actualexpplain * (fooddepletetime - self.fooddata[i].foodbufftime)
          }
          else {
            buffedexp = actualexpplain * self.fooddata[i].foodbuff * fooddepletetime
            normalexp = 0
          }
          totalexp = buffedexp + normalexp
          let numberoffoodrequired = Math.floor(self.remainingexp / totalexp) + 1
          timerequired = numberoffoodrequired * fooddepletetime
          if (self.remainingexp % totalexp != 0) {
            if ((self.remainingexp % totalexp) - buffedexp <= 0) {
              additionaltime = (self.remainingexp % totalexp) / actualexpbuffed
              console.log(additionaltime);
              console.log(numberoffoodrequired);
              console.log(fooddepletetime);
              timerequired = Math.ceil((numberoffoodrequired - 1) * fooddepletetime + additionaltime)
              console.log("fire1");
            }
            else {
              additionaltime = self.fooddata[i].foodbufftime + ((self.remainingexp % totalexp) - buffedexp) / actualexpplain
              console.log(additionaltime);
              console.log(numberoffoodrequired);
              console.log(fooddepletetime);
              timerequired = Math.ceil((numberoffoodrequired - 1) * fooddepletetime + additionaltime)
              console.log("fire2");
            }
          }

          let indivfoodresult = {
            foodname: self.fooddata[i].foodname,
            resulttimehour: Math.floor(timerequired / 60),
            resulttimemin: timerequired % 60,
            resultquantity: numberoffoodrequired,
            buffedexp: Math.floor(actualexpplain * self.fooddata[i].foodbuff * 60),
            fueluseage: self.fooddata[i].foodprice * numberoffoodrequired,
            fueltype: self.fooddata[i].foodicon
          }
          self.foodresult.push(indivfoodresult)
        }
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>
  img {
    width: 60px;
  }
  .ControllerTable, .ControllerTable>tr, .ControllerTable>tr>th, .ControllerTable>tr>td {
    border: 1px solid black;
  }
  .resultTable, .resultTable>tr, .resultTable>tr>th, .resultTable>tr>td {
    border: 1px solid black;
  }
  .resultTable, .resultTable>tr>th, .resultTable>tr>td {
    padding: 0.3em;
  }
  .ControllerTable {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }
  .tableHeader {
    vertical-align: middle;
    background-color: #bad3f9;
  }
  .tableinput {
    padding-left: 0.3em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 100%
  }
  .calculationButton {
    width: 5em;
    height: 2em;
  }
  .calculationButtonArea {
    margin-top: 2em;
    text-align: center;
    margin-bottom: 2em;
  }
  .resultTable {
    width: 100%;
    text-align: center;
  }
  .warningBox {
    text-align: center;
    color: red;
  }
</style>
