<template lang="html">
<div class="">
  <div class="outterBorder roundBorder">
    <div class="innerBorder roundBorder title">
      ㆎ건조시간표
    </div>
  </div>
  <div class="buildListBox">
    <table class="fullBox buildListTable">
      <colgroup>
        <col width="10%">
        <col width="90%">
      </colgroup>
      <tr v-for="characterTimeList in characterBuildList">
        <th>{{ characterTimeList[0].buildtime }}</th>
        <td>
          <div class="lFloat buildCharacterArea" v-for="character in characterTimeList">
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
</template>

<script>
export default {
  data() {
    return {
      characterBuildList: []
    }
  },
  mounted() {
    let self = this
    this.$http.get("/characterbuildtime").then(function(result) {
      self.characterBuildList = result.data
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  img {
    width: 60px;
  }
  .buildListBox {
    margin-top: 2em;
    margin-bottom: 7em;
  }
  .buildListTable, .buildListTable>tr, .buildListTable>tr>td, .buildListTable>tr>th {
    border: 1px solid black;
    padding: 0.3em;
  }
  .buildListTable>tr>th {
    background-color: #bad3f9;
  }
  .buildCharacterName {
    font-size: 70%
  }
  .buildCharacterArea {
    padding: 0.3em;
    text-align: center;
  }
</style>
