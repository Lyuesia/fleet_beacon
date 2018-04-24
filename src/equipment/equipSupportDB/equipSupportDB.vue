<template lang="html">
  <div class="equipDB">
    <div class="equipDBTitleArea">
      <div class="fullBox outterBorder roundBorder equipDBTitle">
        <div class="innerBorder roundBorder title">
          ㆎ 보조장비 DB
        </div>
      </div>
      <div class="userManualArea">
        <div class="userManualTitle">
          사용법
        </div>
        <div class="userManualContent">
          <p>1. 출현상자, 장비종류, 장비티어, 레어도는 서로 and 로직으로 묶여있기에 모두 체크하셔야 리스트를 볼 수 있습니다.</p><p>&nbsp; &nbsp;검색버튼을 누르지 마시고 체크박스만 체크하면 바로 결과를 볼 수 있습니다.</p><p>&nbsp; &nbsp;ex) SSR만 보고싶을시: 출현상자[전부체크], 장비종류[전부체크], 장비티어[전부체크], 레어도[SSR]</p><p><br></p><p>2. 이름 검색의 경우 입력칸에 이름을 써넣고 엔터, 또는 검색 버튼을 클릭시 실행됩니다.</p><p>&nbsp; &nbsp;다만 이름 검색의 경우 위에 체크박스 필터를 전부 무시하여 실행됩니다.</p><p>&nbsp; &nbsp;또한 이름 입력칸을 빈칸으로 두고 검색시 모든 장비 정보가 로딩되니 주의바랍니다.</p><p><br></p><p>3. 모든 수치는 강화 +10 기준입니다.</p>
        </div>
      </div>
    </div>
    <div class="filterArea fullBox">
      <table class="fullBox filterTable">
        <colgroup>
          <col width="25%">
          <col width="25%">
          <col width="25%">
          <col width="25%">
        </colgroup>
        <tr>
          <th class="title">출현상자<input type="checkbox" v-model="boxSelectAll" @change="checkBoxToggle"></th>
          <th class="title">장비종류<input type="checkbox" v-model="typeSelectAll" @change="checkBoxToggle"></th>
          <th class="title">장비티어<input type="checkbox" v-model="tierSelectAll" @change="checkBoxToggle"></th>
          <th class="title">레어도<input type="checkbox" v-model="raritySelectAll" @change="checkBoxToggle"></th>
        </tr>
        <tr class="filterSelection">
          <td>
            <div class="boxCheckBox" v-for="checkboxes in boxes">
              <input type="checkbox" :id="checkboxes.equipbox" :value="checkboxes.equipbox" v-model="equipBox" @change="checkBoxToggle">
              <label :for="checkboxes.equipbox">{{ checkboxes.equipbox }}</label>
            </div>
          </td>
          <td>
            <div class="subCheckBox lFloat" v-for="checkboxes in types">
              <input type="checkbox" :id="checkboxes.equipspecifictype" :value="checkboxes.equipspecifictype" v-model="equipType" @change="checkBoxToggle">
              <label :for="checkboxes.equipspecifictype">{{ checkboxes.equipspecifictype }}</label>
            </div>
          </td>
          <td>
            <div class="subCheckBox lFloat" v-for="checkboxes in tiers">
              <input type="checkbox" :id="checkboxes.equiptier" :value="checkboxes.equiptier" v-model="equipTier" @change="checkBoxToggle">
              <label :for="checkboxes.equiptier">{{ checkboxes.equiptier }}</label>
            </div>
          </td>
          <td>
            <div class="subCheckBox lFloat" v-for="checkboxes in rarities">
              <input type="checkbox" :id="checkboxes.equiprarity" :value="checkboxes.equiprarity" v-model="equipRarity" @change="checkBoxToggle">
              <label :for="checkboxes.equiprarity">{{ checkboxes.equiprarity }}</label>
            </div>
          </td>
        </tr>
        <tr>
          <td class="searchBoxTitle title">
              장비명
          </td>
          <td colspan="3">
            <div class="searchBox">
              <input class="searchInputBox" type="text" v-on:keyup.enter="nameSearch" v-model="equipName">
              <button type="button" @click="nameSearch">검색</button>
            </div>
          </td>
        </tr>
        <!-- <tr>
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
        </tr> -->
      </table>
    </div>
    <div class="skillCheckBoxArea rFloat">
      <input type="checkbox" id="equipSkillCheckBox" v-model="skillshow">
      <label for="equipSkillCheckBox">장비 스킬 보기</label>
    </div>
    <div class="charListArea">
      <table class="charListTable">
        <tr class="outterBorder lightRoundBorder charListNavBar fullBox">
          <th class="statNav iconStatNav">아이콘</th>
          <th class="statNav nameStatNav" @click="sortName" v-bind:class="{ active: nameNavbar }">이름</th>
          <th class="statNav normalStatNav" @click="sortTier" v-bind:class="{ active: tierNavbar }">티어</th>
          <th class="statNav normalStatNav" @click="sortType" v-bind:class="{ active: typeNavbar }">종류</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortHealth" v-bind:class="{ active: healthNavbar }">체력</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortReload" v-bind:class="{ active: reloadNavbar }">장전</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortFirepower" v-bind:class="{ active: firepowerNavbar }">화력</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortTorpedo" v-bind:class="{ active: torpedoNavbar }">뇌장</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortAgility" v-bind:class="{ active: agilityNavbar }">회피</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortAntiair" v-bind:class="{ active: antiairNavbar }">대공</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortAirpower" v-bind:class="{ active: airpowerNavbar }">항공</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortAccuracy" v-bind:class="{ active: accuracyNavbar }">명중</th>
          <th class="statNav normalStatNav" v-if="skillshow == false" @click="sortSpeed" v-bind:class="{ active: speedNavbar }">속도</th>
          <th class="statNav" v-if="skillshow == true">스킬</th>
        </tr>
        <tr class="charList" v-for="equip in filtered">
          <td class="stats icon">
            <img :src="equip.equipiconimage" alt="">
          </td>
          <td class="stats">
            {{ equip.equipkoreanname }}
          </td>
          <td class="stats">{{ equip.equiptier }}</td>
          <td class="stats">{{ equip.equipspecifictype }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxhealth }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxreload }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxfirepower }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxtorpedo }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxagility }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxantiair }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxairpower }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxaccuracy }}</td>
          <td class="stats" v-if="skillshow == false">{{ equip.equipmaxspeed }}</td>
          <td class="stats" v-if="skillshow == true">{{ equip.equipextraeffects }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equip: "보조",
      equipBox: [],
      equipType: [],
      equipTier: [],
      equipRarity: [],
      equipName: "",
      filtered: [],
      boxes: [],
      types: [],
      tiers: [],
      rarities: [],
      skillshow: false,
      // advancedFilterDrop: false,
      // remodelShip: false,
      // remodelAvailable: false,
      // dropAvailable: false,
      // buildAvailable: false,
      // limitedShip: false,
      // nonLimitedShip: false,
      skilldropdown: false,
      sortOrder: "asc",
      nameNavbar:false,
      tierNavbar:false,
      typeNavbar:false,
      healthNavbar:false,
      reloadNavbar:false,
      firepowerNavbar:false,
      torpedoNavbar:false,
      agilityNavbar:false,
      antiairNavbar:false,
      airpowerNavbar:false,
      accuracyNavbar:false,
      speedNavbar:false
    }
  },
  mounted() {
    let self = this
    this.$http.post("/equipfiltermenu", {
      equip: this.equip
    }).then((result) => {
      self.boxes = result.data[0]
      self.types = result.data[1]
      self.tiers = result.data[2]
      self.rarities = result.data[3]
    })
    if (sessionStorage.getItem(("equipDBsupportBox")) != null) {
      this.equipBox = JSON.parse(sessionStorage.getItem("equipDBsupportBox"))
      this.equipType = JSON.parse(sessionStorage.getItem("equipDBsupportType"))
      this.equipTier = JSON.parse(sessionStorage.getItem("equipDBsupportTier"))
      this.equipRarity = JSON.parse(sessionStorage.getItem("equipDBsupportRarity"))
      this.equipName = JSON.parse(sessionStorage.getItem("equipDBsupportName"))
    }
    if (this.equipName == "" || this.equipName == null){
      this.$http.post("/equipfilter", {
        equipBox: this.equipBox,
        equipType: this.equipType,
        equipTier: this.equipTier,
        equipRarity: this.equipRarity,
        equip: this.equip
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    }
    else {
      this.$http.post("/equipfilterwithname", {
        equipName: this.equipName,
        equip: this.equip
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    }
  },
  computed: {
    boxSelectAll: {
      get: function () {
        return this.boxes ? this.equipBox.length == this.boxes.length : false;
      },
      set: function (value) {
        var equipBox = [];
        if (value) {
          this.boxes.forEach(function (equipbox) {
            equipBox.push(equipbox.equipbox);
          });
        }
        this.equipBox = equipBox;
      }
    },
    typeSelectAll: {
      get: function () {
        return this.types ? this.equipType.length == this.types.length : false;
      },
      set: function (value) {
        var equipType = [];
        if (value) {
          this.types.forEach(function (equipspecifictype) {
            equipType.push(equipspecifictype.equipspecifictype);
          });
        }
        this.equipType = equipType;
      }
    },
    tierSelectAll: {
      get: function () {
        return this.tiers ? this.equipTier.length == this.tiers.length : false;
      },
      set: function (value) {
        var equipTier = [];
        if (value) {
          this.tiers.forEach(function (equiptier) {
            equipTier.push(equiptier.equiptier);
          });
        }
        this.equipTier = equipTier;
      }
    },
    raritySelectAll: {
      get: function () {
        return this.rarities ? this.equipRarity.length == this.rarities.length : false;
      },
      set: function (value) {
        var equipRarity = [];
        if (value) {
          this.rarities.forEach(function (equiprarity) {
            equipRarity.push(equiprarity.equiprarity);
          });
        }
        this.equipRarity = equipRarity;
      }
    }
  },
  methods: {
    skilldroptoggle() {
      this.skilldropdown = !this.skilldropdown
    },
    checkBoxToggle() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      let self = this
      sessionStorage.setItem("equipDBsupportBox", JSON.stringify(this.equipBox))
      sessionStorage.setItem("equipDBsupportType", JSON.stringify(this.equipType))
      sessionStorage.setItem("equipDBsupportTier", JSON.stringify(this.equipTier))
      sessionStorage.setItem("equipDBsupportRarity", JSON.stringify(this.equipRarity))
      sessionStorage.setItem("equipDBsupportName", "null")
      this.$http.post("/equipfilter", {
        equipBox: this.equipBox,
        equipType: this.equipType,
        equipTier: this.equipTier,
        equipRarity: this.equipRarity,
        equip: this.equip
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
    },
    nameSearch() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      let self = this
      this.$http.post("/equipfilterwithname", {
        equipName: this.equipName,
        equip: this.equip
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
      sessionStorage.setItem("equipDBsupportName", JSON.stringify(this.equipName))
    },
    sortName() {
      this.nameNavbar = true
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipkoreanname > b.equipkoreanname) ? 1 : ((b.equipkoreanname > a.equipkoreanname) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipkoreanname < b.equipkoreanname) ? 1 : ((b.equipkoreanname < a.equipkoreanname) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortTier() {
      this.nameNavbar = false
      this.tierNavbar = true
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equiptier > b.equiptier) ? 1 : ((b.equiptier > a.equiptier) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equiptier < b.equiptier) ? 1 : ((b.equiptier < a.equiptier) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortType() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = true
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipspecifictype > b.equipspecifictype) ? 1 : ((b.equipspecifictype > a.equipspecifictype) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipspecifictype < b.equipspecifictype) ? 1 : ((b.equipspecifictype < a.equipspecifictype) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortHealth() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = true
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxhealth > b.equipmaxhealth) ? 1 : ((b.equipmaxhealth > a.equipmaxhealth) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxhealth < b.equipmaxhealth) ? 1 : ((b.equipmaxhealth < a.equipmaxhealth) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortReload() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = true
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxreload > b.equipmaxreload) ? 1 : ((b.equipmaxreload > a.equipmaxreload) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxreload < b.equipmaxreload) ? 1 : ((b.equipmaxreload < a.equipmaxreload) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortFirepower() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = true
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxfirepower > b.equipmaxfirepower) ? 1 : ((b.equipmaxfirepower > a.equipmaxfirepower) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxfirepower < b.equipmaxfirepower) ? 1 : ((b.equipmaxfirepower < a.equipmaxfirepower) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortTorpedo() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = true
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxtorpedo > b.equipmaxtorpedo) ? 1 : ((b.equipmaxtorpedo > a.equipmaxtorpedo) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxtorpedo < b.equipmaxtorpedo) ? 1 : ((b.equipmaxtorpedo < a.equipmaxtorpedo) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAgility() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = true
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxagility > b.equipmaxagility) ? 1 : ((b.equipmaxagility > a.equipmaxagility) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxagility < b.equipmaxagility) ? 1 : ((b.equipmaxagility < a.equipmaxagility) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAntiair() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = true
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxantiair > b.equipmaxantiair) ? 1 : ((b.equipmaxantiair > a.equipmaxantiair) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxantiair < b.equipmaxantiair) ? 1 : ((b.equipmaxantiair < a.equipmaxantiair) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAirpower() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = true
      this.accuracyNavbar = false
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxairpower > b.equipmaxairpower) ? 1 : ((b.equipmaxairpower > a.equipmaxairpower) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxairpower < b.equipmaxairpower) ? 1 : ((b.equipmaxairpower < a.equipmaxairpower) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAccuracy() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = true
      this.speedNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxaccuracy > b.equipmaxaccuracy) ? 1 : ((b.equipmaxaccuracy > a.equipmaxaccuracy) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxaccuracy < b.equipmaxaccuracy) ? 1 : ((b.equipmaxaccuracy < a.equipmaxaccuracy) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortSpeed() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.healthNavbar = false
      this.reloadNavbar = false
      this.firepowerNavbar = false
      this.torpedoNavbar = false
      this.agilityNavbar = false
      this.antiairNavbar = false
      this.airpowerNavbar = false
      this.accuracyNavbar = false
      this.speedNavbar = true
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxspeed > b.equipmaxspeed) ? 1 : ((b.equipmaxspeed > a.equipmaxspeed) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxspeed < b.equipmaxspeed) ? 1 : ((b.equipmaxspeed < a.equipmaxspeed) ? -1 : 0);} );
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
  .equipDB {
    width: 100%;
    padding-left: 0.4em;
    padding-right: 0.4em;
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
  .boxCheckBox {
    padding: 0.7em;
    vertical-align: middle;
    width: 100%;
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
  .icon {
    border: 2px solid #a6f0ff;
    border-top: none;
    border-right: none;
  }
  .active {
    background-color: #1e69eb;
  }
  .equipDBTitle {
    margin-bottom: 2em;
  }
  .userManualArea {
    padding: 1em;
    border: 1px solid black;
    margin-bottom: 2em;
  }
  .userManualTitle {
    text-align: center;
    padding: 0.5em;
    font-weight: 900;
  }
  .userManualContent {
    font-size: 90%;
  }
  .skillCheckBoxArea{
    font-size: 90%;
  }
</style>
