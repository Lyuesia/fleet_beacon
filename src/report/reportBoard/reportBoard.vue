<template lang="html">
  <div class="reportBoardArea">
    <div class="fullBox outterBorder roundBorder reportBoardTitle">
      <div class="innerBorder roundBorder title">
        ㆎ 건의사항
      </div>
    </div>
    <div class="outterBorder">
      <table class="reportList">
        <colgroup>
          <col width="10%">
          <col width="55%">
          <col width="20%">
          <col width="15%">
        </colgroup>
        <tr class="reportListHeader">
          <th class="reportIdHeader">번호</th><th class="reportTitleHeader">제목</th><th class="reportWritterHeader">작성자</th><th class="reportTimeHeader">작성일</th>
        </tr>
        <tr class="reportListArticle" v-for="report in reportList">
          <td>{{ report.reportid }}</td><td class="reportListContent"><router-link :to="'/report/'+report.reportid">{{ report.title }}</router-link></td><td>{{ report.nicname }}</td><td class="reportListTime">{{ report.writetime }}</td>
        </tr>
      </table>
    </div>
    <div class="loadMoreButton" v-if="loadMore">
      <img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/buttonImage/morebutton.png" @click="loadMorereport">
    </div>
    <div class="reportfooter">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportList: [],
      loadMore: false,
      reportLength: 20,
      lastIndex: 0
    }
  },
  mounted() {
    let self = this
    this.$http.post("/reportpageload", {
      reportLength: this.reportLength
    }).then((result) => {
      self.reportList = result.data
      self.lastIndex = self.reportList[self.reportList.length - 1].id
      if (self.reportList.length == self.reportLength) {
        self.loadMore = true
      }
    }).catch((error) => console.log(error))
  },
  methods: {
    loadMorereport() {
      let self = this
      this.$http.post("/reportpageloadmore", {
        reportLength: this.reportLength,
        lastIndex: this.lastIndex
      }).then((result) => {
        self.reportList.push.apply(self.reportList, result.data);
        self.lastIndex = self.reportList[self.reportList.length - 1].id
        if (self.reportList.length == self.reportLength) {
          self.loadMore = true
        }
        else {
          self.loadMore = false
        }
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>
  table {
    border-collapse: separate;
    border-spacing: 0 5px;
  }
  th {
    padding: 0.5em;
  }
  td {
    padding: 0.2em;
    height: 1.5em;
  }
  .reportBoardArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .reportBoardTitle {
    margin-bottom: 5px;
  }
  .reportList {
    font-size: 14px;
    margin: 5px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    width: 99%;
  }
  .reportListHeader {
    background-color: #bfd6f9;
  }
  .reportListArticle {
    background-color: #cce6ff;
  }
  .reportListTime {
    font-size: 90%;
  }
  .reportListContent {
    text-align: left;
  }
  .loadMoreButton {
    text-align: center;
    margin: 1em;
  }
  .reportfooter {
    margin-bottom: 7em;
  }
</style>
