<template lang="html">
  <div class="charDB">
    <div class="filterArea fullBox">
      <table class="fullBox filterTable">
        <tr>
          <th class="title fourthBox">소속진영</th>
          <th class="title halfBox">함정종류</th>
          <th class="title fourthBox">레어도</th>
        </tr>
        <tr class="filterSelection">
          <td>
            <div class="halfBox lFloat">
              <div class="subCheckBox">
                <input type="checkbox" id="America" value="미국" v-model="shipCountry" @change="checkBoxToggle">
                <label for="America">미국</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Japan" value="일본" v-model="shipCountry" @change="checkBoxToggle">
                <label for="Japan">일본</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="China" value="중국" v-model="shipCountry" @change="checkBoxToggle">
                <label for="China">중국</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Unknown" value="불명" v-model="shipCountry" @change="checkBoxToggle">
                <label for="Unknown">불명</label>
              </div>
            </div>
            <div class="halfBox lFloat">
              <div class="subCheckBox">
                <input type="checkbox" id="UnitedKingdom" value="영국" v-model="shipCountry" @change="checkBoxToggle">
                <label for="UnitedKingdom">영국</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Germany" value="독일" v-model="shipCountry" @change="checkBoxToggle">
                <label for="Germany">독일</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Soviet" value="소련" v-model="shipCountry" @change="checkBoxToggle">
                <label for="Soviet">소련</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Neptune" value="차원" v-model="shipCountry" @change="checkBoxToggle">
                <label for="Neptune">차원</label>
              </div>

            </div>
          </td>
          <td>
            <div class="thirdBox lFloat">
              <div class="subCheckBox">
                <input type="checkbox" id="Destroyer" value="구축함" v-model="shipType" @change="checkBoxToggle">
                <label for="Destroyer">구축함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Battlecruiser" value="순양전함" v-model="shipType" @change="checkBoxToggle">
                <label for="Battlecruiser">순양전함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Carrier" value="항공모함" v-model="shipType" @change="checkBoxToggle">
                <label for="Carrier">항공모함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="HybridCarrier" value="항공전함" v-model="shipType" @change="checkBoxToggle">
                <label for="HybridCarrier">항공전함</label>
              </div>
            </div>
            <div class="thirdBox lFloat">
              <div class="subCheckBox">
                <input type="checkbox" id="Lightcruiser" value="경순양함" v-model="shipType" @change="checkBoxToggle">
                <label for="Lightcruiser">경순양함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Battleship" value="전함" v-model="shipType" @change="checkBoxToggle">
                <label for="Battleship">전함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Monitor" value="모니터함" v-model="shipType" @change="checkBoxToggle">
                <label for="Monitor">모니터함</label>
              </div>
            </div>
            <div class="thirdBox lFloat">
              <div class="subCheckBox">
                <input type="checkbox" id="Heavycruiser" value="중순양함" v-model="shipType" @change="checkBoxToggle">
                <label for="Heavycruiser">중순양함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Lightcarrier" value="경항공모함" v-model="shipType" @change="checkBoxToggle">
                <label for="Lightcarrier">경항공모함</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="Repairship" value="공작함" v-model="shipType" @change="checkBoxToggle">
                <label for="Repairship">공작함</label>
              </div>
            </div>
          </td>
          <td>
            <div class="halfBox lFloat preSubCheckBox">
              <div class="subCheckBox">
                <input type="checkbox" id="ssr" value="SSR" v-model="shipRarity" @change="checkBoxToggle">
                <label for="ssr">SSR</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="r" value="R" v-model="shipRarity" @change="checkBoxToggle">
                <label for="r">R</label>
              </div>
            </div>
            <div class="halfBox lFloat preSubCheckBox">
              <div class="subCheckBox">
                <input type="checkbox" id="sr" value="SR" v-model="shipRarity" @change="checkBoxToggle">
                <label for="sr">SR</label>
              </div>
              <div class="subCheckBox">
                <input type="checkbox" id="n" value="N" v-model="shipRarity" @change="checkBoxToggle">
                <label for="n">N</label>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="searchBoxTitle title">
              함정이름
          </td>
          <td colspan="2">
            <div class="searchBox">
              <input class="searchInputBox" type="text" v-model="shipName">
              <button type="button" @click="nameSearch">검색</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="charListArea">
      <table class="charListTable">
        <tr class="outterBorder lightRoundBorder charListNavBar fullBox">
          <th class="statNav normalStatNav">No.</th>
          <th class="statNav iconStatNav">아이콘</th>
          <th class="statNav nameStatNav">이름</th>
          <th class="statNav normalStatNav">위치</th>
          <th class="statNav normalStatNav">함종</th>
          <th class="statNav normalStatNav">진영</th>
          <th class="statNav normalStatNav">내구</th>
          <th class="statNav normalStatNav">장갑</th>
          <th class="statNav normalStatNav">포격</th>
          <th class="statNav normalStatNav">뇌장</th>
          <th class="statNav normalStatNav">장전</th>
          <th class="statNav normalStatNav">기동</th>
          <th class="statNav normalStatNav">대공</th>
          <th class="statNav normalStatNav">항공</th>
          <th class="statNav normalStatNav">연비</th>
          <th class="statNav normalStatNav">항속</th>
        </tr>
        <tr class="charList" v-for="character in filtered" :key="character.id">
          <td class="id">{{ character.id }}</td>
          <td class="stats icon">
            <router-link :to="'/characters/'+character.id">
              <img :src="character.iconimage" alt="">
            </router-link>
          </td>
          <td class="stats">
            <router-link :to="'/characters/'+character.id">
              {{ character.koreanname }}
            </router-link>
          </td>
          <td class="stats">{{ character.position }}</td>
          <td class="stats">{{ character.type }}</td>
          <td class="stats">{{ character.country }}</td>
          <td class="stats">{{ character.health }}</td>
          <td class="stats">{{ character.armor }}</td>
          <td class="stats">{{ character.firepower }}</td>
          <td class="stats">{{ character.torpedo }}</td>
          <td class="stats">{{ character.reload }}</td>
          <td class="stats">{{ character.agility }}</td>
          <td class="stats">{{ character.antiair }}</td>
          <td class="stats">{{ character.airpower }}</td>
          <td class="stats">{{ character.efficiency }}</td>
          <td class="stats">{{ character.speed }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shipCountry: [],
      shipType: [],
      shipRarity: [],
      shipName: "",
      filtered: []
    }
  },
  methods: {
    checkBoxToggle() {
      let self = this
      this.$http.post("/charactersfilter", {
        rarity: this.shipRarity,
        country: this.shipCountry,
        shipType: this.shipType
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    },
    nameSearch() {
      let self = this
      this.$http.post("/charactersfilterwithname", {
        rarity: this.shipRarity,
        country: this.shipCountry,
        shipType: this.shipType,
        shipName: this.shipName
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>
  img {
    width: 60px;
    margin-bottom: 3px;
  }
  .filterTable, .filterTable>tr>td, .filterTable>tr, .filterTable>tr>th {
    border: 1px solid #418cf2;
  }
  .filterArea {
    margin-bottom: 2em;
  }
  .preSubCheckBox {
    vertical-align: middle;
  }
  .subCheckBox {
    padding: 0.7em;
    vertical-align: middle;
  }
  .searchBoxTitle {
    text-align: center;
  }
  .searchBox {
    padding-left: 0.7em;
  }
  .searchInputBox {
    width: 90%;
  }
  .filterSelection {
    font-size: 14px;
  }
  .charListArea {
    margin-bottom: 6em;
  }
  .charListTable {
    text-align: center;
    border-collapse: separate;
    border-spacing: 0px 4px;
    width: 100%;
  }
  .charListNavBar {
    color: white;
    background-color: #58a9f7;
  }
  .statNav {
    letter-spacing: 2px;
    font-size: 14px;
    padding: 0.4em;
  }
  .normalStatNav {
    /* width: 5.34%; */
  }
  .iconStatNav {
    width: 9%;
  }
  .nameStatNav {
    width: 15%
  }
  .charList {
    margin-top: 1px;
    margin-bottom: 1px;
    font-size: 14px;
  }
  .stats {
    border: 2px solid #a6f0ff;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  .id {
    border: 2px solid #a6f0ff;
    border-top: none;
    border-right: none;
  }
</style>
