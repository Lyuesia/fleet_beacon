<template lang="html">
  <div class="filterArea">
    <div class="subBox charFilterCountry">
      <div class="charFilterHeader topMargin">
        <div class="charFilterHeaderInner">
          소속 진영
        </div>
      </div>
      <div class="charCountryCheck charFilterBox">
        <div class="subBox halfBox">
          <div class="subCheckBox">
            <input type="checkbox" id="America" value="america" v-model="shipCountry">
            <label for="America">미국</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="UnitedKingdom" value="unitedkingdom" v-model="shipCountry">
            <label for="UnitedKingdom">영국</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="China" value="china" v-model="shipCountry">
            <label for="China">중국</label>
          </div>
        </div>
        <div class="subBox halfBox">
          <div class="subCheckBox">
            <input type="checkbox" id="Germany" value="germany" v-model="shipCountry">
            <label for="Germany">독일</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Japan" value="japan" v-model="shipCountry">
            <label for="Japan">일본</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Russia" value="russia" v-model="shipCountry">
            <label for="Russia">러시아</label>
          </div>
        </div>
      </div>
    </div>
    <div class="subBox halfBox">
      <div class="charFilterHeader middleBox topMargin">
        <div class="charFilterHeaderInner">
          함정 종류
        </div>
      </div>
      <div class="charFilterBox checkFilterBox checkMiddleBox">
        <div class="subBox thirdBox">
          <div class="subCheckBox">
            <input type="checkbox" id="Destroyer" value="destroyer" v-model="shipType">
            <label for="Destroyer">구축함</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Battlecruiser" value="battlecruiser" v-model="shipType">
            <label for="Battlecruiser">순양전함</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Carrier" value="carrier" v-model="shipType">
            <label for="Carrier">항공모함</label>
          </div>
        </div>
        <div class="subBox thirdBox">
          <div class="subCheckBox">
            <input type="checkbox" id="Lightcruiser" value="lightcruiser" v-model="shipType">
            <label for="Lightcruiser">경순양함</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Battleship" value="battleship" v-model="shipType">
            <label for="Battleship">전함</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Monitor" value="monitor" v-model="shipType">
            <label for="Monitor">모니터함</label>
          </div>
        </div>
        <div class="subBox thirdBox">
          <div class="subCheckBox">
            <input type="checkbox" id="Heavycruiser" value="heavycruiser" v-model="shipType">
            <label for="Heavycruiser">중순양함</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Lightcarrier" value="lightcarrier" v-model="shipType">
            <label for="Lightcarrier">경항공모함</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="Repairship" value="repairship" v-model="shipType">
            <label for="Repairship">공작함</label>
          </div>
        </div>
      </div>
    </div>
    <div class="subBox charFilterRarity">
      <div class="charFilterHeader topMargin">
        <div class="charFilterHeaderInner">
          레어도
        </div>
      </div>
      <div class="charFilterBox checkFilterBox">
        <div class="subBox halfBox">
          <div class="subCheckBox">
            <input type="checkbox" id="ssr" value="SSR" v-model="shipRarity">
            <label for="ssr">SSR</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="r" value="R" v-model="shipRarity">
            <label for="r">R</label>
          </div>
        </div>
        <div class="subBox halfBox">
          <div class="subCheckBox">
            <input type="checkbox" id="sr" value="SR" v-model="shipRarity">
            <label for="sr">SR</label>
          </div>
          <div class="subCheckBox">
            <input type="checkbox" id="n" value="N" v-model="shipRarity">
            <label for="n">N</label>
          </div>
        </div>
      </div>
    </div>
    <div class="fullBox">
      <div class="subBox fourthBox">
        <div class="charSearchHeader">
          <div class="charFilterHeaderInner">
            함정 이름
          </div>
        </div>
      </div>
      <div class="subBox searchArea">
        <input class="searchBox" type="text" name="" value="">
        <button type="button" name="button">검색</button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase.js"

export default {
  data() {
    return {
      shipCountry: [],
      shipType: [],
      shipRarity: []
    }
  },
  firebase: {
    // function () {
    //   return {
    //     anArray: db.ref("character")
    //   }
    // },
    characters: db.ref("character")
  },
  // mounted: function () {
  //   console.log('1');
  //   this.character;
  //   console.log(this.character);
  //
  //   // console.log(aa);
  //   // console.log(this.$bindAsArray("characters"));
  //   // this.$firebaseRefs.character.on('value', snapshot => {
  //   //   console.log(snapshot.val());
  //   // });
  //   // console.log(this.$firebaseRefs.character.val());
  // }
  //
  computed: {
    callchar () {
      this.characters = this.characters.filter((character) => {
        console.log(character);
        return true;
      });
    }
  }
}
</script>

<style lang="css">
  .charFilterCountry {
    width: 25%;
  }
  .charFilterRarity {
    width: 25%;
  }
  .charFilterHeader {
    text-align: center;
    border: 1px solid #418cf2;
    background-color: #58a9f7;
    color: white;
    border-bottom: none;
  }
  .topMargin {
    margin-top: 2rem;
  }
  .charFilterHeaderInner {
    border: 1px solid #7fbbf8;
    padding-top: 0.28125rem;
    padding-bottom: 0.28125rem;
    padding-left: 0.4375rem;
    padding-right: 0.4375rem;
    letter-spacing: 2px;
  }
  .charFilterBox {
    width: 100%;
    font-size: 14px;
    height: 10rem;
  }
  .charCountryCheck {
    border: 1px solid #418cf2;
    border-right: none;
  }
  .charSearchHeader {
    text-align: center;
    border: 1px solid #418cf2;
    background-color: #58a9f7;
    color: white;
    border-top: none;
  }
  .checkFilterBox {
    border: 1px solid #418cf2;
  }
  .middleBox {
    border-left: none;
    border-right: none;
  }
  .checkMiddleBox {
    border-right: none;
  }
  .subCheckBox {
    padding: 0.5rem;
  }
  .subBox {
    float: left;
  }
  .searchArea {
    width: 73.3%;
    border: 1px solid #418cf2;
    border-top: none;
    border-left: none;
    padding-top: 0.30rem;
    padding-bottom: 0.30rem;
    padding-left: 0.4375rem;
    padding-right: 0.4375rem;
  }
  .searchBox {
    width: 75%
  }
</style>
