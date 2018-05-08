<template lang="html">
  <div class="characterArea">
    <div class="outterBorder roundBorder fullBox">
      <div class="innerBorder roundBorder titleNoSpaceing">
        ㆎ {{ charData.koreanname }}
      </div>
    </div>
    <div class="charStatBox">
      <div class="lFloat halfBox charImgBox">
        <div class="imgFrame">
          <div class="innerFrame">
            <img :src="charData.standingimage" alt="">
          </div>
        </div>
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
    <div class="limitBreakBox">
      <table class="limitBreakTable fullBox">
        <colgroup>
          <col width="10.33333%">
          <col width="23%">
          <col width="10.33333%">
          <col width="23%">
          <col width="10.33333%">
          <col width="23%">
        </colgroup>
        <tr>
          <th class="charStatHead" colspan="6">레벨 돌파 스텟 (110레벨)</th>
        </tr>
        <tr>
          <th class="charStatHead">내구</th><td>{{ charData.limit110health }}</td><th class="charStatHead">장갑</th><td>{{ charData.armor }}</td><th class="charStatHead">장전</th><td>{{ charData.limit110reload }}</td>
        </tr>
        <tr>
          <th class="charStatHead">포격</th><td>{{ charData.limit110firepower }}</td><th class="charStatHead">뇌장</th><td>{{ charData.limit110torpedo }}</td><th class="charStatHead">기동</th><td>{{ charData.limit110agility }}</td>
        </tr>
        <tr>
          <th class="charStatHead">대공</th><td>{{ charData.limit110antiair }}</td><th class="charStatHead">항공</th><td>{{ charData.limit110airpower }}</td><th class="charStatHead">연비</th><td>{{ charData.efficiency}}</td>
        </tr>
      </table>
    </div>
    <div class="availabilityBox">
      <table class="fullBox">
        <colgroup>
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="10%">
          <col width="15%">
          <col width="15%">
          <col width="20%">
        </colgroup>
        <tr>
          <th class="charStatHead" colspan="8">획득경로</th>
        </tr>
        <tr>
          <th class="charStatHead">한정</th><td>{{ charData.limited }}</td><th class="charStatHead">드랍</th><td>{{ charData.dropavailability }}</td><th class="charStatHead">건조</th><td>{{ charData.buildtime }}</td><th class="charStatHead">그 외 경로</th><td>{{ charData.etcavailability }}</td>
        </tr>
        <tr v-if="charData.limited == 'X' && charData.dropspot != null">
          <th class="charStatHead">드랍장소</th><td colspan="7"><div class="lFloat" v-for="spots in dropSpot">{{ spots.regionmainnumber }}-{{ spots.regionnumber}},&nbsp;</div></td>
        </tr>
      </table>
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

      <div class="remodelInfoButtonArea fullBox">
        <button type="button" @click="remodelDetails=!remodelDetails" class="remodelInfoButton" v-if="charData.remodelid != null">개조 세부정보 보기</button>
      </div>

      <table class="remodelRequirementsTable fullBox" v-if="remodelDetails == true">
        <colgroup>
          <col width="5%">
          <col width="5%">
          <col width="5%">
          <col width="5%">
          <col width="5%">
          <col width="10%">
          <col width="25%">
          <col width="40%">
        </colgroup>
        <tr>
          <th colspan="8" class="charStatHead">개조 요구 수치</th>
        </tr>
        <tr>
          <th class="charStatHead">Lv</th>
          <th class="charStatHead">골드</th>
          <th class="charStatHead">T1</th>
          <th class="charStatHead">T2</th>
          <th class="charStatHead">T3</th>
          <th class="charStatHead">동일함선</th>
          <th class="charStatHead">요구 재료</th>
          <th class="charStatHead">특이사항</th>
        </tr>
        <tr>
          <td>{{ charData.remodelmaxlevel }}</td>
          <td>{{ charData.remodelgold }}</td>
          <td>{{ charData.t1paper }}</td>
          <td>{{ charData.t2paper }}</td>
          <td>{{ charData.t3paper }}</td>
          <td>{{ charData.sameshipneeded }}</td>
          <td>{{ charData.upgradeitem1 }}<br />{{ charData.upgradeitem2 }}</td>
          <td>{{ charData.etc }}</td>
        </tr>
      </table>
      <table class="remodelStatDifferenceTable fullBox" v-if="remodelDetails == true">
        <tr>
          <th colspan="5" class="charStatHead">개조 후 스텟 변화량</th>
        </tr>
        <tr>
          <th class="charStatHead">내구</th><th class="charStatHead">장갑</th><th class="charStatHead">포격</th><th class="charStatHead">뇌장</th><th class="charStatHead">장전</th>
        </tr>
        <tr>
          <td>{{ charData.upgradehealth }}</td><td>{{ charData. upgradearmor }}</td><td>{{ charData.upgradefirepower }}</td><td>{{ charData.upgradetorpedo }}</td><td>{{ charData.upgradereload }}</td>
        </tr>
        <tr>
          <th class="charStatHead">기동</th><th class="charStatHead">대공</th><th class="charStatHead">항공</th><th class="charStatHead">연비</th><th class="charStatHead">항속</th>
        </tr>
        <tr>
          <td>{{ charData.upgradeagility }}</td><td>{{ charData.upgradeantiair }}</td><td>{{ charData.upgradeairpower }}</td><td>{{ charData.upgradeefficiency }}</td><td>{{ charData.upgradespeed }}</td>
        </tr>
      </table>
      <table class="remodelEquipDifferenceTable fullBox" v-if="remodelDetails == true">
        <tr>
          <th colspan="6" class="charStatHead">개조 후 장비 변화</th>
        </tr>
        <tr>
          <th colspan="2" class="charStatHead">장비칸1</th><th colspan="2" class="charStatHead">장비칸2</th><th colspan="2" class="charStatHead">장비칸3</th>
        </tr>
        <tr>
          <td>{{ charData.upgradeequipnum1 }}</td><td>{{ charData.upgradeequipnum1eff }}</td><td>{{ charData.upgradeequipnum2 }}</td><td>{{ charData.upgradeequipnum2eff }}</td><td>{{ charData.upgradeequipnum3 }}</td><td>{{ charData.upgradeequipnum3eff }}</td>
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
          <div class="imgFrame">
            <div class="innerFrame">
              <img :src="remodelCharData.standingimage" alt="">
            </div>
          </div>
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
      <div class="limitBreakBox">
        <table class="limitBreakTable fullBox">
          <colgroup>
            <col width="10.33333%">
            <col width="23%">
            <col width="10.33333%">
            <col width="23%">
            <col width="10.33333%">
            <col width="23%">
          </colgroup>
          <tr>
            <th class="charStatHead" colspan="6">레벨 돌파 스텟 (110레벨)</th>
          </tr>
          <tr>
            <th class="charStatHead">내구</th><td>{{ remodelCharData.limit110health }}</td><th class="charStatHead">장갑</th><td>{{ remodelCharData.armor }}</td><th class="charStatHead">장전</th><td>{{ remodelCharData.limit110reload }}</td>
          </tr>
          <tr>
            <th class="charStatHead">포격</th><td>{{ remodelCharData.limit110firepower }}</td><th class="charStatHead">뇌장</th><td>{{ remodelCharData.limit110torpedo }}</td><th class="charStatHead">기동</th><td>{{ remodelCharData.limit110agility }}</td>
          </tr>
          <tr>
            <th class="charStatHead">대공</th><td>{{ remodelCharData.limit110antiair }}</td><th class="charStatHead">항공</th><td>{{ remodelCharData.limit110airpower }}</td><th class="charStatHead">연비</th><td>{{ remodelCharData.efficiency}}</td>
          </tr>
        </table>
      </div>
      <div class="availabilityBox">
        <table class="fullBox">
          <colgroup>
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
            <col width="15%">
            <col width="15%">
            <col width="20%">
          </colgroup>
          <tr>
            <th class="charStatHead" colspan="8">획득경로</th>
          </tr>
          <tr>
            <th class="charStatHead">한정</th><td>{{ remodelCharData.limited }}</td><th class="charStatHead">드랍</th><td>{{ remodelCharData.dropavailability }}</td><th class="charStatHead">건조</th><td>{{ remodelCharData.buildtime }}</td><th class="charStatHead">그 외 경로</th><td>{{ remodelCharData.etcavailability }}</td>
          </tr>
          <tr v-if="remodelCharData.limited == 'X' && remodelCharData.dropspot != null">
            <th class="charStatHead">드랍장소</th><td colspan="7"><div class="lFloat" v-for="spots in dropSpot">{{ spots.regionmainnumber }}-{{ spots.regionnumber}},&nbsp;</div></td>
          </tr>
        </table>
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
      dropSpot:{},
      remodelCharData: {},
      remodelDetails: false
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
          self.charData = result.data[0][0]
          self.dropSpot = result.data[1]
          self.remodelId = parseInt(self.id) + 3000
          if (self.charData.remodel !== 0) {
            self.$http.post("/character", {
              id: self.remodelId
            }). then(function (response) {
              self.remodelCharData = response.data[0][0]
              if (self.remodelCharData.time === null) {
                self.remodelCharData.buildtime = "건조불가"
              }
              if (self.remodelCharData.limited == 0) {
                self.remodelCharData.limited = "X"
              }
              else {
                self.remodelCharData.limited = "O"
              }
              if (self.remodelCharData.dropavailability == 0) {
                self.remodelCharData.dropavailability = "X"
              }
              else {
                self.remodelCharData.dropavailability = "O"
              }
            })
          }
          if (self.charData.time === null) {
            self.charData.buildtime = "건조불가"
          }
          if (self.charData.limited == 0) {
            self.charData.limited = "X"
          }
          else {
            self.charData.limited = "O"
          }
          if (self.charData.dropavailability == 0) {
            self.charData.dropavailability = "X"
          }
          else {
            self.charData.dropavailability = "O"
          }
          if (self.charData.remodelid != null) {
            if (self.charData.sameshipneeded == 1) {
              self.charData.sameshipneeded = "O"
            }
            else {
              self.charData.sameshipneeded = "X"
            }
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
    height: 29.5em;
    margin-bottom: 2em;
    text-align: center;
    vertical-align: middle;
  }
  .imgFrame {
    position: relative;
    text-align: center;
    width: 100%;
    height: 0;
    padding-bottom: 108%;
  }
  .innerFrame {
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 0;
  }
  .innerFrame:before,
  .frameBefore {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
  }
  .innerFrame img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
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
  .availabilityBox {
    margin-bottom: 2em;
  }
  .skillBox {
    font-size: 14px;
    margin-bottom: 2em;
  }
  .skillBox>table>tr>td {
    font-size: 80%
  }
  .skillTable {
    text-align: center;
  }
  .equipBox {
    font-size: 14px;
    margin-bottom: 3em;
  }
  .remodelRequirementsTable {
    margin-top: 2em;
  }
  .remodelStatDifferenceTable {
    margin-top: 2em;
  }
  .remodelEquipDifferenceTable {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .remodelInfoButton {
    text-align: center;
    padding: 1em;
    margin-top: 3em;
  }
  .remodelInfoButtonArea {
    text-align: center;
  }
  .limitBreakBox {
    margin-bottom: 2em;
  }
  .limitBreakTable {
    font-size: 90%
  }
</style>
