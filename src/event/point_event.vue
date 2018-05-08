<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ {{ eventGeneral.pointeventkoreanname }}
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
              <li><a href="#eventquest" v-if="eventGeneral.pointeventquest == 1">ㆎ 이벤트 한정임무</a></li>
              <li><a href="#eventregionreward" v-if="eventGeneral.pointeventregionreward == 1">ㆎ 일반 해역 클리어 보상</a></li>
              <li><a href="#eventpointstack">ㆎ 이벤트 포인트 누적 보상</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="questDropDown=!questDropDown" v-if="eventGeneral.pointeventquest == 1">
        <div class="innerBorder roundBorder title" id="eventquest">
          ㆎ 이벤트 한정임무 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="questDropDown">
        <table class="eventQuestTable">
          <colgroup>
            <col width="60%">
            <col width="40%">
          </colgroup>
          <tr>
            <th>임무내용</th><th>보상</th>
          </tr>
          <tr v-for="quest in eventQuestTable">
            <td>{{ quest.questcontent }}</td><td>{{ quest.questreward }}</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="regionrewardDropDown=!regionrewardDropDown" v-if="eventGeneral.pointeventquest == 1">
        <div class="innerBorder roundBorder title" id="eventregionreward">
          ㆎ 일반 해역 클리어 보상 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="regionrewardDropDown">
        <table class="eventRegionTable">
          <colgroup>
            <col width="30%">
            <col width="70%">
          </colgroup>
          <tr>
            <th>해역</th><th>보상</th>
          </tr>
          <tr v-for="regioninfo in eventRegionRewardTable">
            <td>{{ regioninfo.regionnumber }}</td><td>{{ regioninfo.itemreward }}{{ eventGeneral.pointeventitemname}}</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="pointstackDropDown=!pointstackDropDown">
        <div class="innerBorder roundBorder title" id="eventpointstack">
          ㆎ 이벤트 포인트 누적 보상 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="pointstackDropDown">
        <table class="eventPointRewardTable">
          <colgroup>
            <col width="10%">
            <col width="20%">
            <col width="70%">
          </colgroup>
          <tr>
            <th>순서</th><th>누적포인트</th><th>보상</th>
          </tr>
          <tr v-for="pointreward in eventPointRewardTable">
            <td>{{ pointreward.stackid }}</td><td>{{ pointreward.pointstacked }}</td><td>{{ pointreward.stackreward }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="pageFooter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventIndex: null,
      questDropDown: true,
      pointstackDropDown: true,
      regionrewardDropDown: true,
      eventGeneral: null,
      eventQuestTable: null,
      eventPointRewardTable: null,
      eventRegionRewardTable:null
    }
  },
  mounted() {
    let self = this
    this.eventIndex = this.$route.params.eventIndex

    this.$http.post("/pointeventinfo", {
      eventIndex: this.eventIndex
    }).then(function(result) {
      self.eventGeneral = result.data[0][0]
      self.eventQuestTable = result.data[1]
      self.eventPointRewardTable = result.data[2]
      self.eventRegionRewardTable = result.data[3]
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
table,th, td {
  text-align: center;
  border: 1px solid black;
}
table>tr>th {
  background-color: #bad3f9;
}
table {
  border-collapse:collapse;
  margin-top: 2em;
  margin-bottom: 2em;
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
.indexTable>tr>th {
  background-color: white;
  padding: 0;
}
.indexTableHeader {
  border: 2px solid white;
  letter-spacing: 3em;
  text-indent: 3em;
  background-color: #3acaff;
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
  margin-bottom: 1em;
  font-size: 90%;
  padding-left: 1em;
  padding-right: 1em;
  width: 97%;
}
.wikiSubContentArea td,th {
  padding: 0.3em;
}
.pageFooter {
  margin-bottom: 7em;
}
.eventPointRewardTable, .eventQuestTable {
  width: 70%;
}
.eventPointRewardTable>tr>td, .eventPointRewardTable>tr>th, .eventQuestTable>tr>td, .eventQuestTable>tr>th {
  padding: 0.5em;
  vertical-align: middle;
}
.eventRegionTable {
  width: 50%;
}
.eventRegionTable>tr>td, .eventRegionTable>tr>th {
  padding: 0.5em;
  vertical-align: middle;
}
</style>
