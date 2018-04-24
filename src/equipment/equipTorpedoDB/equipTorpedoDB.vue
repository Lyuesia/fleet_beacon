<template lang="html">
  <div class="equipDB">
    <div class="equipDBTitleArea">
      <div class="fullBox outterBorder roundBorder equipDBTitle">
        <div class="innerBorder roundBorder title">
          ㆎ 어뢰 DB
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
    <div class="charListArea">
      <table class="charListTable">
        <tr class="outterBorder lightRoundBorder charListNavBar fullBox">
          <th class="statNav iconStatNav">아이콘</th>
          <th class="statNav nameStatNav" @click="sortName" v-bind:class="{ active: nameNavbar }">이름</th>
          <th class="statNav normalStatNav" @click="sortTier" v-bind:class="{ active: tierNavbar }">티어</th>
          <th class="statNav normalStatNav" @click="sortType" v-bind:class="{ active: typeNavbar }">종류</th>
          <th class="statNav normalStatNav" @click="sortBox" v-bind:class="{ active: boxNavbar }">상자</th>
          <th class="statNav">데미지</th>
          <th class="statNav normalStatNav" @click="sortMaxShotSpeed" v-bind:class="{ active: maxShotSpeedNavbar }">사속</th>
          <th class="statNav normalStatNav" @click="sortRange" v-bind:class="{ active: rangeNavbar }">사거리</th>
          <th class="statNav normalStatNav" @click="sortAngle" v-bind:class="{ active: angleNavbar }">분산각</th>
          <th class="statNav normalStatNav" @click="sortTorpedo" v-bind:class="{ active: torpedoNavbar }">뇌장</th>
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
          <td class="stats">{{ equip.equipbox }}</td>
          <td class="stats">{{ equip.equipmaxdamage }}</td>
          <td class="stats">{{ equip.equipmaxshotspeed }}</td>
          <td class="stats">{{ equip.equiprange }}</td>
          <td class="stats">{{ equip.equipspread }}</td>
          <td class="stats">{{ equip.equipmaxtorpedo }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equip: "어뢰",
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
      // advancedFilterDrop: false,
      // remodelShip: false,
      // remodelAvailable: false,
      // dropAvailable: false,
      // buildAvailable: false,
      // limitedShip: false,
      // nonLimitedShip: false,
      sortOrder: "asc",
      nameNavbar:false,
      tierNavbar:false,
      typeNavbar:false,
      boxNavbar:false,
      maxShotSpeedNavbar:false,
      rangeNavbar:false,
      angleNavbar:false,
      torpedoNavbar:false
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
    if (sessionStorage.getItem(("equipDBtorpedoBox")) != null) {
      this.equipBox = JSON.parse(sessionStorage.getItem("equipDBtorpedoBox"))
      this.equipType = JSON.parse(sessionStorage.getItem("equipDBtorpedoType"))
      this.equipTier = JSON.parse(sessionStorage.getItem("equipDBtorpedoTier"))
      this.equipRarity = JSON.parse(sessionStorage.getItem("equipDBtorpedoRarity"))
      this.equipName = JSON.parse(sessionStorage.getItem("equipDBtorpedoName"))
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
    checkBoxToggle() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
      let self = this
      sessionStorage.setItem("equipDBtorpedoBox", JSON.stringify(this.equipBox))
      sessionStorage.setItem("equipDBtorpedoType", JSON.stringify(this.equipType))
      sessionStorage.setItem("equipDBtorpedoTier", JSON.stringify(this.equipTier))
      sessionStorage.setItem("equipDBtorpedoRarity", JSON.stringify(this.equipRarity))
      sessionStorage.setItem("equipDBtorpedoName", "null")
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
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
      let self = this
      this.$http.post("/equipfilterwithname", {
        equipName: this.equipName,
        equip: this.equip
      }).then((result) => {
        self.filtered = result.data
      }).catch((error) => console.log(error))
      sessionStorage.setItem("equipDBtorpedoName", JSON.stringify(this.equipName))
    },
    sortName() {
      this.nameNavbar = true
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
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
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
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
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipspecifictype > b.equipspecifictype) ? 1 : ((b.equipspecifictype > a.equipspecifictype) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipspecifictype < b.equipspecifictype) ? 1 : ((b.equipspecifictype < a.equipspecifictype) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortBox() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = true
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipbox > b.equipbox) ? 1 : ((b.equipbox > a.equipbox) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipbox < b.equipbox) ? 1 : ((b.equipbox < a.equipbox) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortMaxShotSpeed() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = false
      this.maxShotSpeedNavbar = true
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxshotspeed > b.equipmaxshotspeed) ? 1 : ((b.equipmaxshotspeed > a.equipmaxshotspeed) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxshotspeed < b.equipmaxshotspeed) ? 1 : ((b.equipmaxshotspeed < a.equipmaxshotspeed) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortRange() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = true
      this.angleNavbar = false
      this.torpedoNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equiprange > b.equiprange) ? 1 : ((b.equiprange > a.equiprange) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equiprange < b.equiprange) ? 1 : ((b.equiprange < a.equiprange) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortAngle() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = true
      this.torpedoNavbar = false
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipspread > b.equipspread) ? 1 : ((b.equipspread > a.equipspread) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipspread < b.equipspread) ? 1 : ((b.equipspread < a.equipspread) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
    sortTorpedo() {
      this.nameNavbar = false
      this.tierNavbar = false
      this.typeNavbar = false
      this.boxNavbar = false
      this.maxShotSpeedNavbar = false
      this.rangeNavbar = false
      this.angleNavbar = false
      this.torpedoNavbar = true
      if (this.sortOrder == "asc") {
        this.filtered.sort(function(a,b) {return (a.equipmaxtorpedo > b.equipmaxtorpedo) ? 1 : ((b.equipmaxtorpedo > a.equipmaxtorpedo) ? -1 : 0);} );
        this.sortOrder = "desc"
      }
      else {
        this.filtered.sort(function(a,b) {return (a.equipmaxtorpedo < b.equipmaxtorpedo) ? 1 : ((b.equipmaxtorpedo < a.equipmaxtorpedo) ? -1 : 0);} );
        this.sortOrder = "asc"
      }
    },
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
</style>
