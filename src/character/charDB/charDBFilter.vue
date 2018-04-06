<template lang="html">
  <div class="charDB">
    <div class="filterArea fullBox">
      <table class="fullBox filterTable">
        <colgroup>
          <col width="25%">
          <col width="25%">
          <col width="25%">
          <col width="25%">
        </colgroup>
        <tr>
          <th class="title fourthBox">소속진영<input type="checkbox" v-model="countrySelectAll" @change="checkBoxToggle"></th>
          <th class="title halfBox" colspan="2">함정종류<input type="checkbox" v-model="typeSelectAll" @change="checkBoxToggle"></th>
          <th class="title fourthBox">레어도<input type="checkbox" v-model="raritySelectAll" @change="checkBoxToggle"></th>
        </tr>
        <tr class="filterSelection">
          <td>
            <div class="subCheckBox lFloat" v-for="checkboxes in countries">
              <input type="checkbox" :id="checkboxes.country" :value="checkboxes.country" v-model="shipCountry" @change="checkBoxToggle">
              <label :for="checkboxes.country">{{ checkboxes.country }}</label>
            </div>
          </td>
          <td colspan="2">
            <div class="middleSubCheckBox lFloat" v-for="checkboxes in types">
              <input type="checkbox" :id="checkboxes.type" :value="checkboxes.type" v-model="shipType" @change="checkBoxToggle">
              <label :for="checkboxes.type">{{ checkboxes.type }}</label>
            </div>
          </td>
          <td>
            <div class="subCheckBox lFloat" v-for="checkboxes in rarities">
              <input type="checkbox" :id="checkboxes.rarity" :value="checkboxes.rarity" v-model="shipRarity" @change="checkBoxToggle">
              <label :for="checkboxes.rarity">{{ checkboxes.rarity }}</label>
            </div>
          </td>
        </tr>
        <tr>
          <td class="searchBoxTitle title">
              함정이름
          </td>
          <td colspan="3">
            <div class="searchBox">
              <input class="searchInputBox" type="text" v-model="shipName">
              <button type="button" @click="nameSearch">검색</button>
            </div>
          </td>
        </tr>
        <tr>
          <th class="title" colspan="4" v-on:click.prevent="advancedFilterDrop=!advancedFilterDrop">고급 필터 설정 ▼</th>
        </tr>
        <tr v-if="advancedFilterDrop">
          <th class="title">개장</th><th class="title">드랍</th><th class="title">건조</th><th class="title">한정</th>
        </tr>
        <tr class="filterSelection" v-if="advancedFilterDrop">
          <td>
            <div class="advancedCheckBox lFloat">
              <input type="checkbox" id="remodelship" v-model="remodelShip" @change="checkBoxToggle">
              <label for="remodelship">개장함만 표시</label>
            </div>
            <div class="advancedCheckBox lFloat">
              <input type="checkbox" id="remodelavailable" v-model="remodelAvailable" @change="checkBoxToggle">
              <label for="remodelavailable">개장이 존재하는 함만 표시</label>
            </div>
          </td>
          <td>
            <div class="advancedCheckBox lFloat">
              <input type="checkbox" id="dropavailable" v-model="dropAvailable" @change="checkBoxToggle">
              <label for="dropavailable">드랍 가능한 함만 표시</label>
            </div>
          </td>
          <td>
            <div class="advancedCheckBox lFloat">
              <input type="checkbox" id="buildavailable" v-model="buildAvailable" @change="checkBoxToggle">
              <label for="buildavailable">건조 가능한 함만 표시</label>
            </div>
          </td>
          <td>
            <div class="advancedCheckBox lFloat">
              <input type="checkbox" id="limitedship" v-model="limitedShip" @change="checkBoxToggle">
              <label for="limitedship">한정함만 표시</label>
            </div>
            <div class="advancedCheckBox lFloat">
              <input type="checkbox" id="nonlimitedship" v-model="nonLimitedShip" @change="checkBoxToggle">
              <label for="nonlimitedship">한정이 아닌 함만 표시</label>
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
      filtered: [],
      countries: [],
      types: [],
      rarities: [],
      advancedFilterDrop: false,
      remodelShip: false,
      remodelAvailable: false,
      dropAvailable: false,
      buildAvailable: false,
      limitedShip: false,
      nonLimitedShip: false
    }
  },
  mounted() {
    let self = this
    this.$http.get("/characterfiltermenu").then((result) => {
      self.countries = result.data[0]
      self.types = result.data[1]
      self.rarities = result.data[2]
    })
  },
  computed: {
    countrySelectAll: {
      get: function () {
        return this.countries ? this.shipCountry.length == this.countries.length : false;
      },
      set: function (value) {
        var shipCountry = [];
        if (value) {
          this.countries.forEach(function (country) {
            shipCountry.push(country.country);
          });
        }
        this.shipCountry = shipCountry;
      }
    },
    typeSelectAll: {
      get: function () {
        return this.types ? this.shipType.length == this.types.length : false;
      },
      set: function (value) {
        var shipType = [];
        if (value) {
          this.types.forEach(function (type) {
            shipType.push(type.type);
          });
        }
        this.shipType = shipType;
      }
    },
    raritySelectAll: {
      get: function () {
        return this.rarities ? this.shipRarity.length == this.rarities.length : false;
      },
      set: function (value) {
        var shipRarity = [];
        if (value) {
          this.rarities.forEach(function (rarity) {
            shipRarity.push(rarity.rarity);
          });
        }
        this.shipRarity = shipRarity;
      }
    }
  },
  methods: {
    checkBoxToggle() {
      let self = this
      this.$http.post("/charactersfilter", {
        rarity: this.shipRarity,
        country: this.shipCountry,
        shipType: this.shipType,
        remodelShip: this.remodelShip,
        remodelAvailable: this.remodelAvailable,
        dropAvailable: this.dropAvailable,
        buildAvailable: this.buildAvailable,
        limitedShip: this.limitedShip,
        nonLimitedShip: this.nonLimitedShip
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    },
    nameSearch() {
      let self = this
      this.$http.post("/charactersfilterwithname", {
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
    width: 40%;
  }
  .middleSubCheckBox {
    padding: 0.7em;
    vertical-align: middle;
    width: 28.5%;
  }
  .advancedCheckBox {
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
    font-size: 85%;
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
