<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ해역별 함선드랍
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
              <li><a href="#region1">1. 1해역</a></li>
              <li><a href="#region2">2. 2해역</a></li>
              <li><a href="#region3">3. 3해역</a></li>
              <li><a href="#region4">4. 4해역</a></li>
              <li><a href="#region5">5. 5해역</a></li>
              <li><a href="#region6">6. 6해역</a></li>
              <li><a href="#region7">7. 7해역</a></li>
              <li><a href="#region8">8. 8해역</a></li>
              <li><a href="#region9">9. 9해역</a></li>
              <li><a href="#region10">10. 10해역</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown1=!showDropDown1">
        <div class="innerBorder roundBorder title" id="region1">
          1. 1해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown1">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>1-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char1_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>1-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char1_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>1-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char1_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>1-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char1_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown2=!showDropDown2">
        <div class="innerBorder roundBorder title" id="region2">
          2. 2해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown2">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>2-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char2_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>2-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char2_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>2-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char2_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>2-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char2_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3=!showDropDown3">
        <div class="innerBorder roundBorder title" id="region3">
          3. 3해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown3">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>3-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char3_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>3-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char3_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>3-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char3_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>3-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char3_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown4=!showDropDown4">
        <div class="innerBorder roundBorder title" id="region4">
          4. 4해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown4">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>4-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char4_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>4-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char4_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>4-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char4_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>4-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char4_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown5=!showDropDown5">
        <div class="innerBorder roundBorder title" id="region5">
          5. 5해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown5">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>5-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char5_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>5-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char5_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>5-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char5_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>5-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char5_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown6=!showDropDown6">
        <div class="innerBorder roundBorder title" id="region6">
          6. 6해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown6">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>6-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char6_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>6-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char6_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>6-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char6_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>6-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char6_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown7=!showDropDown7">
        <div class="innerBorder roundBorder title" id="region7">
          7. 7해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown7">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>7-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char7_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>7-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char7_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>7-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char7_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>7-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char7_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown8=!showDropDown8">
        <div class="innerBorder roundBorder title" id="region8">
          8. 8해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown8">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>8-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char8_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>8-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char8_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>8-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char8_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>8-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char8_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown9=!showDropDown9">
        <div class="innerBorder roundBorder title" id="region9">
          9. 9해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown9">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>9-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char9_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>9-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char9_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>9-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char9_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>9-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char9_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown10=!showDropDown10">
        <div class="innerBorder roundBorder title" id="region10">
          8. 10해역 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea regionSubContentArea" v-if="showDropDown10">
        <table>
          <colgroup>
            <col width="10%">
            <col width="90%">
          </colgroup>
          <tr>
            <th>10-1</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char10_1">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>10-2</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char10_2">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>10-3</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char10_3">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>10-4</th>
            <td>
              <div class="lFloat characterIconArea" v-for="character in char10_4">
                <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                <div class="buildCharacterName">
                  <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                </div>
              </div>
            </td>
          </tr>
        </table>
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
      characterList: [],
      char1_1: [],
      char1_2: [],
      char1_3: [],
      char1_4: [],
      char2_1: [],
      char2_2: [],
      char2_3: [],
      char2_4: [],
      char3_1: [],
      char3_2: [],
      char3_3: [],
      char3_4: [],
      char4_1: [],
      char4_2: [],
      char4_3: [],
      char4_4: [],
      char5_1: [],
      char5_2: [],
      char5_3: [],
      char5_4: [],
      char6_1: [],
      char6_2: [],
      char6_3: [],
      char6_4: [],
      char7_1: [],
      char7_2: [],
      char7_3: [],
      char7_4: [],
      char8_1: [],
      char8_2: [],
      char8_3: [],
      char8_4: [],
      char9_1: [],
      char9_2: [],
      char9_3: [],
      char9_4: [],
      char10_1: [],
      char10_2: [],
      char10_3: [],
      char10_4: [],
      showDropDown1: true,
      showDropDown2: true,
      showDropDown3: true,
      showDropDown4: true,
      showDropDown5: true,
      showDropDown6: true,
      showDropDown7: true,
      showDropDown8: true,
      showDropDown9: true,
      showDropDown10: true
    }
  },
  mounted() {
    let self = this
    this.$http.get("/characterdropspotlist").then(function(result) {
      self.characterList = result.data
      for (let i = 0; i < self.characterList.length; i++) {
        if (self.characterList[i].dropspot.match(/1-1/)) {
          self.char1_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/1-2/)) {
          self.char1_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/1-3/)) {
          self.char1_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/1-4/)) {
          self.char1_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/2-1/)) {
          self.char2_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/2-2/)) {
          self.char2_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/2-3/)) {
          self.char2_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/2-4/)) {
          self.char2_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/3-1/)) {
          self.char3_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/3-2/)) {
          self.char3_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/3-3/)) {
          self.char3_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/3-4/)) {
          self.char3_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/4-1/)) {
          self.char4_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/4-2/)) {
          self.char4_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/4-3/)) {
          self.char4_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/4-4/)) {
          self.char4_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/5-1/)) {
          self.char5_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/5-2/)) {
          self.char5_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/5-3/)) {
          self.char5_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/5-4/)) {
          self.char5_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/6-1/)) {
          self.char6_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/6-2/)) {
          self.char6_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/6-3/)) {
          self.char6_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/6-4/)) {
          self.char6_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/7-1/)) {
          self.char7_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/7-2/)) {
          self.char7_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/7-3/)) {
          self.char7_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/7-4/)) {
          self.char7_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/8-1/)) {
          self.char8_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/8-2/)) {
          self.char8_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/8-3/)) {
          self.char8_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/8-4/)) {
          self.char8_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/9-1/)) {
          self.char9_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/9-2/)) {
          self.char9_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/9-3/)) {
          self.char9_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/9-4/)) {
          self.char9_4.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/10-1/)) {
          self.char10_1.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/10-2/)) {
          self.char10_2.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/10-3/)) {
          self.char10_3.push(self.characterList[i])
        }
        if (self.characterList[i].dropspot.match(/10-4/)) {
          self.char10_4.push(self.characterList[i])
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
  width: 50px;
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
.pageFooter {
  margin-bottom: 7em;
}
.characterIconArea {
  padding: 0.5em;
  text-align: center;
  font-size: 80%;
}
</style>
