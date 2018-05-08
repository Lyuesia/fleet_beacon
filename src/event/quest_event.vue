<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ {{ eventGeneral.questeventkoreanname }}
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
              <li><a href="#eventinfo" v-if="eventGeneral.questeventdescription != null">ㆎ 이벤트 개요</a></li>
              <li><a href="#eventquest">ㆎ 이벤트 퀘스트</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="infoDropDown=!infoDropDown" v-if="eventGeneral.questeventdescription != null">
      <div class="innerBorder roundBorder title" id="eventinfo">
        ㆎ 이벤트 개요 ▼
      </div>
    </div>
    <div class="fullBox wikiSubContentArea" v-if="infoDropDown">
      <div class="eventInfoArea" v-html="eventGeneral.questeventdescription">

      </div>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="questDropDown=!questDropDown">
        <div class="innerBorder roundBorder title" id="eventquest">
          ㆎ 이벤트 퀘스트 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="questDropDown">
        <table class="eventQuestTable fullBox" v-if="eventGeneral.questeventdate != 0">
          <colgroup>
            <col width="10%">
            <col width="50%">
            <col width="40%">
          </colgroup>
          <tr>
            <th>오픈일차</th><th>임무내용</th><th>보상</th>
          </tr>
          <tr v-for="quest in eventQuestTable">
            <td>{{ quest.questopentime }}일차</td><td>{{ quest.questcontent }}</td><td>{{ quest.questreward }}</td>
          </tr>
        </table>
        <table class="eventQuestTable fullBox" v-if="eventGeneral.questeventdate == 0">
          <colgroup>
            <col width="50%">
            <col width="40%">
            <col width="10%">
          </colgroup>
          <tr>
            <th>임무내용</th><th>보상</th><th>소요시간</th>
          </tr>
          <tr v-for="quest in eventQuestTable">
            <td>{{ quest.questcontent }}</td><td>{{ quest.questreward }}</td><td>{{ quest.requiredtime }}일</td>
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
      infoDropDown: true,
      eventGeneral: null,
      eventQuestTable: null
    }
  },
  mounted() {
    let self = this
    this.eventIndex = this.$route.params.eventIndex

    this.$http.post("/questeventinfo", {
      eventIndex: this.eventIndex
    }).then(function(result) {
      self.eventGeneral = result.data[0][0]
      self.eventQuestTable = result.data[1]
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
.eventQuestTable>tr>td, .eventQuestTable>tr>th {
  padding: 0.5em;
  vertical-align: middle;
}
.eventInfoArea {
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
