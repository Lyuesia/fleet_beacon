<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ함선 개조 정보
      </div>
    </div>
    <div class="indexTableArea">
      <table class="outterBorder indexTable">
        <tr>
          <th>
            <div class="indexTableHeader">
              목차
            </div>
          </th>
        </tr>
        <tr class="indexTableContent">
          <td>
            <ol>
              <li><a href="#tab1">1. 설계도 정보</a></li>
              <li><a href="#tab2">2. 개조 가능 함선 리스트</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown1=!showDropDown1">
        <div class="innerBorder roundBorder title" id="tab1">
          1. 설계도 정보 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown1">
        <p>
          <br>
        </p>
        <p>
          T1설계도 6장은 T2설계도 1장으로 합성가능하며 T3설계도는 합성이 불가능합니다.
        </p>
        <p>
          <br>
        </p>
        <p>
          - 함종별 요구 설계도
        </p>
        <table>
          <tr>
            <th>설계도</th><th>함종</th>
          </tr>
          <tr>
            <td>구축설계도</td><td>구축함</td>
          </tr>
          <tr>
            <td>순양설계도</td><td>경순양함, 중순양함</td>
          </tr>
          <tr>
            <td>전함설계도</td><td>전함, 순양전함</td>
          </tr>
          <tr>
            <td>항모설계도</td><td>항공모함, 경항공모함</td>
          </tr>
        </table>
        <p>
          <br>
        </p>
        <p>
          - 하드 지역별 설계도 드롭율
        </p>
        <table>
          <tr>
            <th>해역</th><th>티어</th><th>확률</th><th>전체확률</th>
          </tr>
          <tr>
            <td rowspan="3">3해역</td><td>T1</td><td>81.67%</td><td rowspan="3">93.33%</td>
          </tr>
          <tr>
            <td>T2</td><td>11.67%</td>
          </tr>
          <tr>
            <td>T3</td><td>0%</td>
          </tr>
          <tr>
            <td rowspan="3">4해역</td><td>T1</td><td>84.72%</td><td rowspan="3">98.61%</td>
          </tr>
          <tr>
            <td>T2</td><td>12.50%</td>
          </tr>
          <tr>
            <td>T3</td><td>1.39%</td>
          </tr>
          <tr>
            <td rowspan="3">5해역</td><td>T1</td><td>78.79%</td><td rowspan="3">100.00%</td>
          </tr>
          <tr>
            <td>T2</td><td>13.64%</td>
          </tr>
          <tr>
            <td>T3</td><td>7.58%</td>
          </tr>
          <tr>
            <td rowspan="3">6해역</td><td>T1</td><td>75.56%</td><td rowspan="3">100.00%</td>
          </tr>
          <tr>
            <td>T2</td><td>15.73%</td>
          </tr>
          <tr>
            <td>T3</td><td>8.71%</td>
          </tr>
        </table>
        <p>
          출처: http://azurlane.wikiru.jp/index.php?%B2%FE%C2%A4
        </p>
        <p>
          시행횟수가 많지 않은 통계이므로 높은 지역에서 T3 설계도가 더 잘 나온다 정도로만 보시면 됩니다.
        </p>
        <p>
          <br>
        </p>
        <p>
          - 설계도 훈장교환
        </p>
        <table>
          <tr>
            <th>티어</th><th>필요훈장수</th>
          </tr>
          <tr>
            <td>T1</td><td>5개</td>
          </tr>
          <tr>
            <td>T2</td><td>30개</td>
          </tr>
          <tr>
            <td>T3</td><td>100개</td>
          </tr>
        </table>
        <p>
          <br>
        </p>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown2=!showDropDown2">
        <div class="innerBorder roundBorder title" id="tab2">
          2. 개조 가능 함선 리스트 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown2">
        <div class="charListArea">
          <table class="charListTable fullBox">
            <colgroup>
              <col width="9%">
              <col width="10%">
              <col width="5%">
              <col width="5%">
              <col width="5%">
              <col width="5%">
              <col width="5%">
              <col width="10%">
              <col width="10%">
              <col width="10%">
              <col width="26%">
            </colgroup>
            <tr class="">
              <th class="statNav nameStatNav" rowspan="2">함선</th>
              <th class="statNav normalStatNav" rowspan="2">함종</th>
              <th class="statNav normalStatNav" colspan="8">필요 자원</th>
              <th class="statNav normalStatNav"rowspan="2">특이사항</th>
            </tr>
            <tr class="">
              <th class="statNav normalStatNav">Lv</th>
              <th class="statNav normalStatNav">골드</th>
              <th class="statNav normalStatNav">T1</th>
              <th class="statNav normalStatNav">T2</th>
              <th class="statNav normalStatNav">T3</th>
              <th class="statNav normalStatNav">동일함선</th>
              <th class="statNav normalStatNav" colspan="2">요구 재료</th>
            </tr>
            <tr class="charList" v-for="character in remodelCharacterList" :key="character.id">
              <td class="id">
                <div class="characterArea">
                  <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                  <div class="characterName">
                    <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                  </div>
                </div>
              </td>
              <td class="stats">{{ character.type }}</td>
              <td class="stats">{{ character.remodelmaxlevel }}</td>
              <td class="stats">{{ character.remodelgold }}</td>
              <td class="stats">{{ character.t1paper }}</td>
              <td class="stats">{{ character.t2paper }}</td>
              <td class="stats">{{ character.t3paper }}</td>
              <td class="stats">{{ character.sameshipneeded }}</td>
              <td class="stats" colspan="2">{{ character.upgradeitem1 }}<br />{{ character.upgradeitem2 }}</td>
              <td class="stats">{{ character.etc }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="pageFooter">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remodelCharacterList: [],
      showDropDown1: true,
      showDropDown2: true,
    }
  },
  mounted() {
    let self = this
    this.$http.get("/remodelcharacterlist").then(function(result) {
      self.remodelCharacterList = result.data
      for (let i = 0; i < self.remodelCharacterList.length; i++) {
        if (self.remodelCharacterList[i].sameshipneeded == 1) {
          self.remodelCharacterList[i].sameshipneeded = "O"
        }
        else {
          self.remodelCharacterList[i].sameshipneeded = "X"
        }
      }
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
td>p {
  margin: 0.4em;
  padding: 0;
  line-height: 150%;
  font-size: 80%;
}
ol {
  margin: 0;
  padding: 0;
}
ol>li {
  padding: 2px;
}
table,th, td {
  text-align: center;
  border: 1px solid black;
}
table>tr>th {
  background-color: #bad3f9;
}
img {
  width: 50px;
}
table {
  border-collapse:collapse;
}
.wikiArea {
  padding-left: 0.4em;
  padding-right: 0.4em;
}
.indexTableArea {
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}
.indexTable {
  width: 46.5625%;
  background-color: white;
}
.indexTable>tr {
  border: 1px solid #418cf2;
}
.indexTable>tr>th {
  background-color: white;
  padding: 0;
}
.indexTableHeader {
  border: 2px solid white;
  letter-spacing: 3em;
  text-indent: 3em;
  background-color: #3acaff;
}
.indexTableContent {
  font-size: 90%;
}
.indexTableContent>td {
  text-align: left;
  padding: 5px;
}
.wikiSubHeader {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.wikiSubContentArea {
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 90%;
  padding-left: 1em;
  padding-right: 1em;
  width: 97%;
}
.wikiSubContentArea td,th {
  padding: 0.3em;
}
.pageFooter {
  margin-bottom: 7em;
}
.characterIconArea {
  padding: 0.5em;
  text-align: center;
  font-size: 90%;
}
.characterName {
  font-size: 80%
}
.characterArea {
  text-align: center;
}
.charListTable {
  margin-top: 2em;
}
.stats {
  text-align: center;
}
</style>
