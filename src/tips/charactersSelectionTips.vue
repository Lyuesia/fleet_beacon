<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ함선추천
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
              <li><a href="#charRecommend1">1. 들어가기에 앞서</a></li>
              <li><a href="#charRecommend2">2. 구축함</a></li>
              <li><a href="#charRecommend3">3. 경순양함</a></li>
              <li><a href="#charRecommend4">4. 중순양함</a></li>
              <li><a href="#charRecommend5">5. 경항공모함</a></li>
              <li><a href="#charRecommend6">6. 항공모함</a></li>
              <li><a href="#charRecommend7">7. 전함</a></li>
              <li><a href="#charRecommend8">8. 그 외</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown1=!showDropDown1">
        <div class="innerBorder roundBorder title" id="charRecommend1">
          1. 들어가기에 앞서 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown1">
        <p class="intro">이 페이지에 추천된 함선은 최대한 성능에 이견이 없어 성능충이라면 누구나 하나는 키울법한 함선을 모은 것 입니다.</p><p>이곳에 추천된 함선 외에도 위치타, 듀크 오브 요크 등 매우 쓸만한 함선들이 있으니 여기 없는 함선이라고 무작정 거르지 마시고 커뮤니티에 한번쯤 물어보는것을 권합니다.</p><p>또한 특정한 상황(연습전, 절약런 등)에서는 사기급 능력을 지녔지만 일반해역에서는 쓸 수 없는 특수함들도 추천되어있으니 채용전에 설명을 읽어주시길 바랍니다.</p>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown2=!showDropDown2">
        <div class="innerBorder roundBorder title" id="charRecommend2">
          2. 구축함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown2" v-for="character in num1recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3=!showDropDown3">
        <div class="innerBorder roundBorder title" id="charRecommend3">
          3. 경순양함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown3" v-for="character in num2recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown4=!showDropDown4">
        <div class="innerBorder roundBorder title" id="charRecommend4">
          4. 중순양함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown4" v-for="character in num3recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown5=!showDropDown5">
        <div class="innerBorder roundBorder title" id="charRecommend5">
          5. 경항공모함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown5" v-for="character in num4recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown6=!showDropDown6">
        <div class="innerBorder roundBorder title" id="charRecommend6">
          6. 항공모함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown6" v-for="character in num5recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown7=!showDropDown7">
        <div class="innerBorder roundBorder title" id="charRecommend7">
          7. 전함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown7" v-for="character in num6recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown8=!showDropDown8">
        <div class="innerBorder roundBorder title" id="charRecommend8">
          8. 그 외 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea charRecommendSubContentArea" v-if="showDropDown8" v-for="character in num7recommend">
        <table class="fullBox outterBorder">
          <colgroup>
            <col width="8%">
            <col width="8%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
            <col width="14%">
          </colgroup>
          <tr>
            <td colspan="2" rowspan="2" class="icon"><router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link></td>
            <th>나라</th><td>{{ character.country }}</td><th>함종</th><td>{{ character.type }}</td><th>레어도</th><td>{{ character.rarity }}</td>
          </tr>
          <tr>
            <td colspan="6" rowspan="2" v-html="character.recommendtext"></td>
          </tr>
          <tr>
            <td colspan="2" class="name"><router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="recommendPageFooter">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendlist: [],
      num1recommend: [],
      num2recommend: [],
      num3recommend: [],
      num4recommend: [],
      num5recommend: [],
      num6recommend: [],
      num7recommend: [],
      showDropDown1: true,
      showDropDown2: true,
      showDropDown3: true,
      showDropDown4: true,
      showDropDown5: true,
      showDropDown6: true,
      showDropDown7: true,
      showDropDown8: true
    }
  },
  mounted() {
    let self = this
    this.$http.post("/characterrecommend", {
      id: [32, 33, 37, 44, 75, 77, 80, 92, 101, 104, 115, 118, 129, 130, 131, 142, 145, 155, 222, 232, 251, 257, 258, 259, 309]
    }).then(function(result) {
      self.recommendlist = result.data
      for (let i = 0; i < self.recommendlist.length; i++) {
        if (self.recommendlist[i].type == "구축함") {
          self.num1recommend.push(self.recommendlist[i])
        }
        else if (self.recommendlist[i].type == "경순양함") {
          self.num2recommend.push(self.recommendlist[i])
        }
        else if (self.recommendlist[i].type == "중순양함") {
          self.num3recommend.push(self.recommendlist[i])
        }
        else if (self.recommendlist[i].type == "경항공모함") {
          self.num4recommend.push(self.recommendlist[i])
        }
        else if (self.recommendlist[i].type == "항공모함") {
          self.num5recommend.push(self.recommendlist[i])
        }
        else if (self.recommendlist[i].type == "전함" || self.recommendlist[i].type == "순양전함") {
          self.num6recommend.push(self.recommendlist[i])
        }
        else {
          self.num7recommend.push(self.recommendlist[i])
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
table, th, td {
  text-align: center;
  border: 1px solid black;
}
table>tr>th {
  background-color: #bad3f9;
}
img {
  width: 70px;
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
.indexTableHeader {
  border: 2px solid white;
  background-color: #3acaff;
  letter-spacing: 3em;
  text-indent: 3em;
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
  margin-bottom: 0.5em;
  font-size: 90%;
  padding-left: 1em;
  padding-right: 1em;
  width: 97%;
}
.intro {
  font-size: 90%;
}
.name {
  border-top: none;
}
.icon {
  border-bottom: none;
}
.recommendPageFooter {
  margin-bottom: 7em;
}
</style>
