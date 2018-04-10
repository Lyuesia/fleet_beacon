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
              <input class="searchInputBox" type="text" v-on:keyup.enter="nameSearch" v-model="shipName">
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
          <th class="statNav normalStatNav" @click="sortId" v-bind:class="{ active: idNavbar }">No.</th>
          <th class="statNav iconStatNav">아이콘</th>
          <th class="statNav nameStatNav" @click="sortName" v-bind:class="{ active: nameNavbar }">이름</th>
          <th class="statNav normalStatNav" @click="sortPosition" v-bind:class="{ active: positionNavbar }">위치</th>
          <th class="statNav normalStatNav" @click="sortType" v-bind:class="{ active: typeNavbar }">함종</th>
          <th class="statNav normalStatNav" @click="sortCountry" v-bind:class="{ active: countryNavbar }">진영</th>
          <th class="statNav normalStatNav" @click="sortHealth" v-bind:class="{ active: healthNavbar }">내구</th>
          <th class="statNav normalStatNav" @click="sortArmor" v-bind:class="{ active: armorNavbar }">장갑</th>
          <th class="statNav normalStatNav" @click="sortFirepower" v-bind:class="{ active: firepowerNavbar }">포격</th>
          <th class="statNav normalStatNav" @click="sortTorpedo" v-bind:class="{ active: torpedoNavbar }">뇌장</th>
          <th class="statNav normalStatNav" @click="sortReload" v-bind:class="{ active: reloadNavbar }">장전</th>
          <th class="statNav normalStatNav" @click="sortAgility" v-bind:class="{ active: agilityNavbar }">기동</th>
          <th class="statNav normalStatNav" @click="sortAntiair" v-bind:class="{ active: antiairNavbar }">대공</th>
          <th class="statNav normalStatNav" @click="sortAirpower" v-bind:class="{ active: airpowerNavbar }">항공</th>
          <th class="statNav normalStatNav" @click="sortEfficiency" v-bind:class="{ active: efficiencyNavbar }">연비</th>
          <th class="statNav normalStatNav" @click="sortSpeed" v-bind:class="{ active: speedNavbar }">항속</th>
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
      nonLimitedShip: false,
      sortOrder: "asc",
      idNavbar:false,
      nameNavbar:false,
      positionNavbar:false,
      typeNavbar:false,
      countryNavbar:false,
      healthNavbar:false,
      armorNavbar:false,
      firepowerNavbar:false,
      torpedoNavbar:false,
      reloadNavbar:false,
      agilityNavbar:false,
      antiairNavbar:false,
      airpowerNavbar:false,
      efficiencyNavbar:false,
      speedNavbar:false,
    }
  },
  mounted() {
    let self = this
    this.$http.get("/characterfiltermenu").then((result) => {
      self.countries = result.data[0]
      self.types = result.data[1]
      self.rarities = result.data[2]
    })
    if (sessionStorage.getItem(("charDBrarity")) != null) {
      this.shipRarity = JSON.parse(sessionStorage.getItem("charDBrarity"))
      this.shipCountry = JSON.parse(sessionStorage.getItem("charDBcountry"))
      this.shipType = JSON.parse(sessionStorage.getItem("charDBshipType"))
      this.remodelShip = JSON.parse(sessionStorage.getItem("charDBremodelShip"))
      this.remodelAvailable = JSON.parse(sessionStorage.getItem("charDBremodelAvailable"))
      this.dropAvailable = JSON.parse(sessionStorage.getItem("charDBdropAvailable"))
      this.buildAvailable = JSON.parse(sessionStorage.getItem("charDBbuildAvailable"))
      this.limitedShip = JSON.parse(sessionStorage.getItem("charDBlimitedShip"))
      this.nonLimitedShip = JSON.parse(sessionStorage.getItem("charDBnonLimitedShip"))
      this.shipName = JSON.parse(sessionStorage.getItem("charDBshipName"))
    }
    if (this.shipName == "" || this.shipName == null){
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
    }
    else {
      this.$http.post("/charactersfilterwithname", {
        shipName: this.shipName
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    }
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
      sessionStorage.setItem("charDBrarity", JSON.stringify(this.shipRarity))
      sessionStorage.setItem("charDBcountry", JSON.stringify(this.shipCountry))
      sessionStorage.setItem("charDBshipType", JSON.stringify(this.shipType))
      sessionStorage.setItem("charDBremodelShip", JSON.stringify(this.remodelShip))
      sessionStorage.setItem("charDBremodelAvailable", JSON.stringify(this.remodelAvailable))
      sessionStorage.setItem("charDBdropAvailable", JSON.stringify(this.dropAvailable))
      sessionStorage.setItem("charDBbuildAvailable", JSON.stringify(this.buildAvailable))
      sessionStorage.setItem("charDBlimitedShip", JSON.stringify(this.limitedShip))
      sessionStorage.setItem("charDBnonLimitedShip", JSON.stringify(this.nonLimitedShip))
      sessionStorage.setItem("charDBshipName", "null")
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
      sessionStorage.setItem("charDBshipName", JSON.stringify(this.shipName))
    },
    sortId() {
      this.idNavbar = true
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortName() {
      this.idNavbar = false
      this.nameNavbar = true
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.koreanname > b.koreanname) ? 1 : ((b.koreanname > a.koreanname) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.koreanname < b.koreanname) ? 1 : ((b.koreanname < a.koreanname) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortPosition() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = true
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.position < b.position) ? 1 : ((b.position < a.position) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortType() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = true
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.type < b.type) ? 1 : ((b.type < a.type) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortCountry() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = true
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.country < b.country) ? 1 : ((b.country < a.country) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortHealth() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = true
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.health > b.health) ? 1 : ((b.health > a.health) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.health < b.health) ? 1 : ((b.health < a.health) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortArmor() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = true
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.armor > b.armor) ? 1 : ((b.armor > a.armor) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.armor < b.armor) ? 1 : ((b.armor < a.armor) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortFirepower() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = true
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.firepower > b.firepower) ? 1 : ((b.firepower > a.firepower) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.firepower < b.firepower) ? 1 : ((b.firepower < a.firepower) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortTorpedo() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = true
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.torpedo > b.torpedo) ? 1 : ((b.torpedo > a.torpedo) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.torpedo < b.torpedo) ? 1 : ((b.torpedo < a.torpedo) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortReload() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = true
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.reload > b.reload) ? 1 : ((b.reload > a.reload) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.reload < b.reload) ? 1 : ((b.reload < a.reload) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAgility() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = true
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.agility > b.agility) ? 1 : ((b.agility > a.agility) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.agility < b.agility) ? 1 : ((b.agility < a.agility) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAntiair() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = true
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.antiair > b.antiair) ? 1 : ((b.antiair > a.antiair) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.antiair < b.antiair) ? 1 : ((b.antiair < a.antiair) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAirpower() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = true
      this.efficiencyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.airpower > b.airpower) ? 1 : ((b.airpower > a.airpower) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.airpower < b.airpower) ? 1 : ((b.airpower < a.airpower) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortEfficiency() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = true
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.efficiency > b.efficiency) ? 1 : ((b.efficiency > a.efficiency) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.efficiency < b.efficiency) ? 1 : ((b.efficiency < a.efficiency) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortSpeed() {
      this.idNavbar = false
      this.nameNavbar = false
      this.positionNavbar = false
      this.typeNavbar = false
      this.countryNavbar = false
      this.healthNavbar = false
      this.armorNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.reloadNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.efficiencyNavbar = false
      this.speedNavbar = true
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.speed > b.speed) ? 1 : ((b.speed > a.speed) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.speed < b.speed) ? 1 : ((b.speed < a.speed) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
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
    font-size: 90%;
    padding: 0.4em;
  }
  .normalStatNav:hover, .nameStatNav:hover {
    background-color: #1e69eb;
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
  .active {
    background-color: #1e69eb;
  }
</style>
