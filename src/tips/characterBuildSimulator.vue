<template>
<div class="">
  <div class="outterBorder roundBorder">
    <div class="innerBorder roundBorder title">
      ㆎ건조 시뮬레이터
    </div>
  </div>
  <div class="buildControllerBox fullBox">
    <table class="buildControllerTable">
      <colgroup>
        <col width="20%">
        <col width="80%">
      </colgroup>
      <tr>
        <th class="buildHeader">건조횟수</th>
        <td>
          <div class="lFloat buildRadio">
            <input type="radio" id="one" value="1" v-model="tries">
            <label for="one">1</label>
          </div>
          <div class="lFloat buildRadio">
            <input type="radio" id="five" value="5" v-model="tries">
            <label for="five">5</label>
          </div>
          <div class="lFloat buildRadio">
            <input type="radio" id="ten" value="10" v-model="tries">
            <label for="ten">10</label>
          </div>
        </td>
      </tr>
      <tr>
        <th class="buildHeader">종류</th>
        <td>
          <div class="lFloat buildRadio">
            <input type="radio" id="smallBuild" v-model="buildtype" v-bind:value="smallBuild">
            <label for="smallBuild">소형함</label>
          </div>
          <div class="lFloat buildRadio">
            <input type="radio" id="mediumBuild" v-model="buildtype" v-bind:value="mediumBuild">
            <label for="mediumBuild">중형함</label>
          </div>
          <div class="lFloat buildRadio">
            <input type="radio" id="specialBuild" v-model="buildtype" v-bind:value="specialBuild">
            <label for="specialBuild">특형함</label>
          </div>
        </td>
      </tr>
    </table>
    <div class="buildButtonArea">
      <div>
        <img class="buildButton" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/buttonImage/buildbutton.png" alt="" @click="characterBuild">
      </div>
    </div>
    <div class="resourceUsageArea rFloat">
      <div class="">
        사용한 <img class="items" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/itemicon/cube.png" alt=""> : {{ usedCube }}
      </div>
      <div class="">
        사용한 <img class="items" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/itemicon/gold.png" alt=""> : {{ usedGold }}
      </div>
    </div>
  </div>
  <div class="buildResultBox">
    <table class="buildResultTable">
      <colgroup>
        <col width="50%">
        <col width="50%">
      </colgroup>
      <tr>
        <th colspan="2">건조결과</th>
      </tr>
      <tr>
        <td colspan="2">
          <div class="builtCharacterBox" v-for="character in builtCharacterList">
            <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
            <div class="characterName">
              <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
            </div>
          </div>
        </td>
      </tr>
      <tr v-if="buildCounter != 0" class="resetButtonContainer">
        <th colspan="2">누적건조결과<button type="button" class="resetButton" @click="resetDock">초기화</button></th>
      </tr>
      <tr v-if="buildCounter != 0">
        <th class="sortButton" @click="sortRarity">레어도로 정렬</th><th class="sortButton" @click="sortStock">출현 횟수로 정렬</th>
      </tr>
      <tr>
        <td colspan="2">
          <div class="dockCharacterBox lFloat" v-for="stockCharacter in dock">
            <router-link :to="'/characters/'+stockCharacter.id"><img :src="stockCharacter.iconimage" alt=""></router-link>
            <div class="characterName">
              <router-link :to="'/characters/'+stockCharacter.id">{{ stockCharacter.stock }}</router-link>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tries: 10,
      buildtype: ["경순양함","중순양함","경항공모함","항공모함","공작함"],
      builtCharacterList: [],
      dock: [{}],
      smallBuild: ["구축함","경순양함","경항공모함","공작함","모니터함"],
      mediumBuild: ["경순양함","중순양함","모니터함","순양전함","전함"],
      specialBuild: ["경순양함","중순양함","경항공모함","항공모함","공작함"],
      usedCube: 0,
      usedGold: 0,
      buildCounter: 0
    }
  },
  methods: {
    buildingProcess() {
      let self = this
      this.$http.post("/characterBuild", {
        tries: parseInt(this.tries),
        buildtype: this.buildtype
      }).then(function(result) {
        self.builtCharacterList = result.data
        if (self.buildtype == self.smallBuild) {
          for (let i = 0; i < self.tries; i++) {
            self.usedCube += 1
            self.usedGold += 600
          }
        }
        else {
          for (let i = 0; i < self.tries; i++) {
            self.usedCube += 2
            self.usedGold += 1500
          }
        }
        self.builtCharacterList.forEach(function (builtCharacter, builtIndex, builtArray) {
          let changed = false
          self.dock.forEach(function (dockCharacter, dockIndex, dockArray) {
                  if (builtCharacter.koreanname == dockCharacter.koreanname) {
                    self.dock[dockIndex].stock += 1
                    changed = true
                  }
                  if (changed == false && dockIndex == dockArray.length-1) {
                    self.dock.push(builtArray[builtIndex])
                    self.dock[dockIndex+1].stock = 1;
                    changed = true
                  }
          })
        })
        if (self.buildCounter == 1) {
          self.dock.shift()
        }
      }).catch((error) => console.log(error))
    },
    characterBuild() {
      this.buildCounter += 1
      this.buildingProcess()
    },
    resetDock() {
      this.dock = [{}]
      this.usedCube = 0
      this.usedGold = 0
      this.buildCounter = 0
    },
    sortRarity() {
      function raritystocksorting(obj1, obj2){
        if(obj1.rarity > obj2.rarity)
            return - 1;
        if(obj2.rarity > obj1.rarity)
            return 1;
        if(obj1.stock > obj2.stock)
            return -1;
        if(obj2.stock > obj1.stock)
            return 1;
        if(obj1.id < obj2.id)
            return -1;
        if(obj2.id < obj1.id)
            return 1;
        return 0;
      }
      this.dock.sort(raritystocksorting)
    },
    sortStock() {
      function stockraritysorting(obj1, obj2){
        if(obj1.stock > obj2.stock)
            return - 1;
        if(obj2.stock > obj1.stock)
            return 1;
        if(obj1.rarity > obj2.rarity)
            return -1;
        if(obj2.rarity > obj1.rarity)
            return 1;
        if(obj1.id < obj2.id)
            return -1;
        if(obj2.id < obj1.id)
            return 1;
        return 0;
      }
      this.dock.sort(stockraritysorting)
    }
  }
}
</script>

<style scoped>
  img {
    width: 60px;
  }
  .buildControllerTable, .buildControllerTable>tr, .buildControllerTable>tr>th, .buildControllerTable>tr>td {
    border: 1px solid black;
  }
  .buildControllerTable {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }
  .buildControllerTable>tr>th {
    background-color: #bad3f9;
  }
  .buildListTable>tr>td {
    text-align: center;
  }
  .buildListTable>tr>th {
    padding: 0;
    vertical-align: middle;
  }
  .buildHeader {
    vertical-align: middle;
  }
  .buildRadio {
    padding-left: 0.3em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 30%
  }
  .buildButton {
    width: 8em;
  }
  .resetButton {
    position: absolute;
    right: 4.5em;
  }
  .buildButtonArea {
    margin-top: 2em;
    text-align: center;
  }
  .resourceUsageArea {
    vertical-align: middle;
  }
  .items {
    width: 1.3em;
  }
  .buildResultTable {
    width: 100%;
    text-align: center;
  }
  .buildResultTable>tr>th {
    background-color: #bad3f9;
    padding: 0.3em;
    border: 1px solid black;
  }
  .builtCharacterBox {
    display: inline-block;
    padding: 0.2em;
    padding-top: 0.5em;
    padding-bottom: 1em;
    text-align: center;
  }
  .dockCharacterBox {
    padding: 0.2em;
    text-align: center;
  }
  .characterName {
    font-size: 70%;
  }
  .sortButton:hover {
    background-color: rgb(57, 148, 255);
  }
</style>
