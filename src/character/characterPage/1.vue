<template lang="html">
  <div class="characterArea">
    <div class="outterBorder roundBorder fullBox">
      <div class="innerBorder roundBorder titleNoSpaceing">
        ㆎ {{ charData.koreanname }}
      </div>
    </div>
    <div class="charStatBox">
      <div class="lFloat halfBox charImgBox">
        <img :src="charData.standingimage" alt="">
      </div>
      <div class="rFloat halfBox charTableBox">
        <table class="fullBox charStatTable">
          <colgroup>
            <col width="25%">
            <col width="25%">
            <col width="25%">
            <col width="25%">
          </colgroup>
          <tr>
            <th class="charStatHead" colspan="4">기본정보</th>
          </tr>
          <tr>
            <th class="charStatHead">도감번호</th><td colspan="3">{{ id }}</td>
          </tr>
          <tr>
            <th class="charStatHead">함선명</th><td colspan="3">{{ charData.koreanname }}</td>
          </tr>
          <tr>
            <th class="charStatHead">일본어함선명</th><td colspan="3">{{ charData.japanesename }}</td>
          </tr>
          <tr>
            <th class="charStatHead">영어함선명</th><td colspan="3">{{ charData.englishname }}</td>
          </tr>
          <tr>
            <th class="charStatHead">등급</th><td colspan="3">{{ charData.rarity }}</td>
          </tr>
          <tr>
            <th class="charStatHead">건조시간</th><td colspan="3">{{ charData.buildtime }}</td>
          </tr>
          <tr>
            <th class="charStatHead">위치</th><td colspan="3">{{ charData.position }}</td>
          </tr>
          <tr>
            <th class="charStatHead">함종</th><td colspan="3">{{ charData.type }}</td>
          </tr>
          <tr>
            <th class="charStatHead">진영</th><td colspan="3">{{ charData.country }}</td>
          </tr>
          <tr>
            <th class="charStatHead">내구</th><td>{{ charData.health }}</td><th class="charStatHead">장갑</th><td>{{ charData.armor }}</td>
          </tr>
          <tr>
            <th class="charStatHead">포격</th><td>{{ charData.firepower }}</td><th class="charStatHead">뇌장</th><td>{{ charData.torpedo }}</td>
          </tr>
          <tr>
            <th class="charStatHead">장전</th><td>{{ charData.reload }}</td><th class="charStatHead">기동</th><td>{{ charData.agility }}</td>
          </tr>
          <tr>
            <th class="charStatHead">대공</th><td>{{ charData.antiair }}</td><th class="charStatHead">항공</th><td>{{ charData.airpower }}</td>
          </tr>
          <tr>
            <th class="charStatHead">연비</th><td>{{ charData.efficiency }}</td><th class="charStatHead">항속</th><td>{{ charData.speed }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="skillBox">
      <table class="fullBox">
        <colgroup>
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
        </colgroup>
        <tr>
          <th class="charStatHead" colspan="4">스킬명</th><th class="charStatHead" colspan="1">스킬타입</th><th  class="charStatHead" colspan="5">효과</th>
        </tr>
        <tr v-if="charData.skill1 !== null">
          <td colspan="4">{{ charData.skill1name }}</td><td>{{ charData.skill1type }}</td><td colspan="5">{{ charData.skill1description }}</td>
        </tr>
        <tr v-if="charData.skill2 !== null">
          <td colspan="4">{{ charData.skill2name }}</td><td>{{ charData.skill2type }}</td><td colspan="5">{{ charData.skill2description }}</td>
        </tr>
        <tr v-if="charData.skill3 !== null">
          <td colspan="4">{{ charData.skill3name }}</td><td>{{ charData.skill3type }}</td><td colspan="5">{{ charData.skill3description }}</td>
        </tr>
        <tr v-if="charData.skill4 !== null">
          <td colspan="4">{{ charData.skill4name }}</td><td>{{ charData.skill4type }}</td><td colspan="5">{{ charData.skill4description }}</td>
        </tr>

      </table>
    </div>
    <div class="equipBox">
      <table class="fullBox skillTable">
        <colgroup>
          <col width="16.666666%">
          <col width="16.666666%">
          <col width="16.666666%">
          <col width="16.666666%">
          <col width="16.666666%">
          <col width="16.666666%">
        </colgroup>
        <tr>
          <th class="charStatHead" colspan="6">장비슬롯</th>
        </tr>
        <tr>
          <th class="charStatHead" colspan="2">장비칸1</th><th class="charStatHead" colspan="2">장비칸2</th><th class="charStatHead" colspan="2">장비칸3</th>
        </tr>
        <tr>
          <td>{{ charData.equipnum1 }}</td><td>{{ charData.equipnum1eff }}</td><td>{{ charData.equipnum2 }}</td><td>{{ charData.equipnum2eff }}</td><td>{{ charData.equipnum3 }}</td><td>{{ charData.equipnum3eff }}</td>
        </tr>
      </table>
    </div>

    <div class="remodelArea" v-if="charData.remodel !== 0">
      <div class="outterBorder roundBorder fullBox">
        <div class="innerBorder roundBorder titleNoSpaceing">
          ㆎ{{ remodelCharData.koreanname }}
        </div>
      </div>
      <div class="charStatBox">
        <div class="lFloat halfBox charImgBox">
          <img :src="remodelCharData.standingimage" alt="">
        </div>
        <div class="rFloat halfBox charTableBox">
          <table class="fullBox charStatTable">
            <colgroup>
              <col width="25%">
              <col width="25%">
              <col width="25%">
              <col width="25%">
            </colgroup>
            <tr>
              <th class="charStatHead" colspan="4">기본정보</th>
            </tr>
            <tr>
              <th class="charStatHead">도감번호</th><td colspan="3">{{ remodelId }}</td>
            </tr>
            <tr>
              <th class="charStatHead">함선명</th><td colspan="3">{{ remodelCharData.koreanname }}</td>
            </tr>
            <tr>
              <th class="charStatHead">일본어함선명</th><td colspan="3">{{ remodelCharData.japanesename }}</td>
            </tr>
            <tr>
              <th class="charStatHead">영어함선명</th><td colspan="3">{{ remodelCharData.englishname }}</td>
            </tr>
            <tr>
              <th class="charStatHead">등급</th><td colspan="3">{{ remodelCharData.rarity }}</td>
            </tr>
            <tr>
              <th class="charStatHead">건조시간</th><td colspan="3">{{ remodelCharData.buildtime }}</td>
            </tr>
            <tr>
              <th class="charStatHead">위치</th><td colspan="3">{{ remodelCharData.position }}</td>
            </tr>
            <tr>
              <th class="charStatHead">함종</th><td colspan="3">{{ remodelCharData.type }}</td>
            </tr>
            <tr>
              <th class="charStatHead">진영</th><td colspan="3">{{ remodelCharData.country }}</td>
            </tr>
            <tr>
              <th class="charStatHead">내구</th><td>{{ remodelCharData.health }}</td><th class="charStatHead">장갑</th><td>{{ remodelCharData.armor }}</td>
            </tr>
            <tr>
              <th class="charStatHead">포격</th><td>{{ remodelCharData.firepower }}</td><th class="charStatHead">뇌장</th><td>{{ remodelCharData.torpedo }}</td>
            </tr>
            <tr>
              <th class="charStatHead">장전</th><td>{{ remodelCharData.reload }}</td><th class="charStatHead">기동</th><td>{{ remodelCharData.agility }}</td>
            </tr>
            <tr>
              <th class="charStatHead">대공</th><td>{{ remodelCharData.antiair }}</td><th class="charStatHead">항공</th><td>{{ remodelCharData.airpower }}</td>
            </tr>
            <tr>
              <th class="charStatHead">연비</th><td>{{ remodelCharData.efficiency }}</td><th class="charStatHead">항속</th><td>{{ remodelCharData.speed }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="skillBox">
        <table class="fullBox">
          <colgroup>
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
          </colgroup>
          <tr>
            <th class="charStatHead" colspan="4">스킬명</th><th class="charStatHead">스킬타입</th><th  class="charStatHead" colspan="5">효과</th>
          </tr>
          <tr v-if="remodelCharData.skill1 !== null">
            <td colspan="4">{{ remodelCharData.skill1name }}</td><td>{{ remodelCharData.skill1type }}</td><td colspan="5">{{ remodelCharData.skill1description }}</td>
          </tr>
          <tr v-if="remodelCharData.skill2 !== null">
            <td colspan="4">{{ remodelCharData.skill2name }}</td><td>{{ remodelCharData.skill2type }}</td><td colspan="5">{{ remodelCharData.skill2description }}</td>
          </tr>
          <tr v-if="remodelCharData.skill3 !== null">
            <td colspan="4">{{ remodelCharData.skill3name }}</td><td>{{ remodelCharData.skill3type }}</td><td colspan="5">{{ remodelCharData.skill3description }}</td>
          </tr>
          <tr v-if="remodelCharData.skill4 !== null">
            <td colspan="4">{{ remodelCharData.skill4name }}</td><td>{{ remodelCharData.skill4type }}</td><td colspan="5">{{ remodelCharData.skill4description }}</td>
          </tr>

        </table>
      </div>
      <div class="equipBox">
        <table class="fullBox">
          <colgroup>
            <col width="16.666666%">
            <col width="16.666666%">
            <col width="16.666666%">
            <col width="16.666666%">
            <col width="16.666666%">
            <col width="16.666666%">
          </colgroup>
          <tr>
            <th class="charStatHead" colspan="6">장비슬롯</th>
          </tr>
          <tr>
            <th class="charStatHead" colspan="2">장비칸1</th><th class="charStatHead" colspan="2">장비칸2</th><th class="charStatHead" colspan="2">장비칸3</th>
          </tr>
          <tr>
            <td>{{ remodelCharData.equipnum1 }}</td><td>{{ remodelCharData.equipnum1eff }}</td><td>{{ remodelCharData.equipnum2 }}</td><td>{{ remodelCharData.equipnum2eff }}</td><td>{{ remodelCharData.equipnum3 }}</td><td>{{ remodelCharData.equipnum3eff }}</td>
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
      id: 0,
      remodelId: 0,
      charData: {},
      remodelCharData: {}
    }
  },
  mounted() {
        let self = this
        if (parseInt(this.$route.params.id) > 3000 && parseInt(this.$route.params.id) < 5000) {
          this.id = parseInt(this.$route.params.id) - 3000
        }
        else {
          this.id = this.$route.params.id
        }
        this.$http.post("/character", {
          id: this.id
        }).then(function(result) {
          self.charData = result.data[0]
          self.remodelId = parseInt(self.id) + 3000
          if (self.charData.remodel !== 0) {
            self.$http.post("/character", {
              id: self.remodelId
            }). then(function (response) {
              self.remodelCharData = response.data[0]
            })
          }
          if (self.charData.time === null) {
            self.charData.time = "건조불가"
          }
        }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
    max-height: 100%;
  }
  table, th, td {
    border: 1px solid black;
    padding: 0.5em;
  }
  td {
    text-align: center;
  }
  .characterArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .charImgBox {
    background-color: white;
    height: 29.16em;
    margin-bottom: 2em;
    text-align: center;
    vertical-align: center;
  }
  .charStatBox {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .charStatHead {
    background-color: #bad3f9;
  }
  .charStatTable {
    text-align: center;
    font-size: 14px;
  }
  .charTableBox {
    margin-bottom: 2em;
  }
  .skillBox {
    font-size: 14px;
    margin-bottom: 2em;
  }
  .skillTable {
    text-align: center;
  }
  .equipBox {
    font-size: 14px;
    margin-bottom: 5em;
  }
</style>
