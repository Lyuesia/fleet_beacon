<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ 해역별 장비드랍
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
              <li v-for="regionNumber in regionList"><a :href="'#region'+regionNumber">ㆎ {{ regionNumber }}해역</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="" v-for="regionNumber in regionList">
        <div class="outterBorder roundBorder wikiSubHeader">
          <div class="innerBorder roundBorder title" :id="'region'+regionNumber">
            ㆎ {{ regionNumber }}해역
          </div>
        </div>
        <div class="fullBox wikiSubContentArea regionSubContentArea">
          <table class="fullBox">
            <colgroup>
              <col width="10%">
              <col width="90%">
            </colgroup>
            <tr v-for="subRegionInfo in equipList[regionNumber]">
              <th>{{ regionNumber }}-{{ subRegionInfo[0].regionnumber }}</th>
              <td>
                <div class="lFloat equipIconArea" v-for="equipment in subRegionInfo">
                  <img class="equipIcon lFloat" :src="equipment.equipiconimage" alt="">
                  <div class="lFloat equipName">
                    {{ equipment.equipkoreanname }} {{ equipment.equiptier }}
                  </div>
                </div>
              </td>
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
      equipList: [],
      regionList:[]
    }
  },
  mounted() {
    let self = this
    this.$http.get("/equipdropspotlist").then(function(result) {
      self.equipList = result.data
      self.regionList = Object.keys(self.equipList)
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
.equipIconArea {
  width: 45%;
  padding: 0.5em;
  font-size: 90%;
  text-align: left;
  vertical-align: middle;
}
.equipIcon {
  padding: 0.3em;
}
.equipName {
  line-height: 50px;
}
</style>
