<template lang="html">
  <div class="noticeBoardArea">
    <div class="fullBox outterBorder roundBorder noticeBoardTitle">
      <div class="innerBorder roundBorder title">
        ㆎ 공지사항
      </div>
    </div>
    <div class="outterBorder">
      <table class="noticeList">
        <tr class="noticeListHeader">
          <th class="noticeIdHeader">번호</th><th class="noticeTitleHeader">제목</th><th class="noticeWritterHeader">작성자</th><th class="noticeTimeHeader">작성일</th>
        </tr>
        <tr class="noticeListArticle" v-for="notice in noticeList">
          <td>{{ notice.id }}</td><td class="noticeListContent"><router-link :to="'/notice/'+notice.id">{{ notice.title }}</router-link></td><td>{{ notice.writer }}</td><td class="noticeListTime">{{ notice.time }}</td>
        </tr>
      </table>
    </div>
    <div class="loadMoreButton" v-if="loadMore">
      <img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/buttonImage/morebutton.png" @click="loadMoreNotice">
    </div>
    <div class="noticefooter">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeList: [],
      loadMore: false,
      noticeLength: 20,
      lastIndex: 0
    }
  },
  mounted() {
    let self = this
    this.$http.post("/noticepageload", {
      noticeLength: this.noticeLength
    }).then((result) => {
      self.noticeList = result.data
      self.lastIndex = self.noticeList[self.noticeList.length - 1].id
      if (self.noticeList.length == self.noticeLength) {
        self.loadMore = true
      }
    }).catch((error) => console.log(error))
  },
  methods: {
    loadMoreNotice() {
      let self = this
      this.$http.post("/noticepageloadmore", {
        noticeLength: this.noticeLength,
        lastIndex: this.lastIndex
      }).then((result) => {
        self.noticeList.push.apply(self.noticeList, result.data);
        self.lastIndex = self.noticeList[self.noticeList.length - 1].id
        if (self.noticeList.length == self.noticeLength) {
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
  tr {
  }
  th {
    padding: 0.5em;
  }
  td {
    padding: 0.2em;
    height: 1.5em;
  }
  .noticeBoardArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .noticeBoardTitle {
    margin-bottom: 5px;
  }
  .noticeList {
    font-size: 14px;
    margin: 5px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    width: 99%;
  }
  .noticeIdHeader {
    width: 5%;
  }
  .noticeTitleHeader {
    width: 70%;
  }
  .noticeWritterHeader {
    width: 10%;
  }
  .noticeTimeHeader {
    width: 15%;
  }
  .noticeListHeader {
    background-color: #bfd6f9;
  }
  .noticeListArticle {
    background-color: #cce6ff;
  }
  .noticeListTime {
    font-size: 10px;
  }
  .noticeListContent {
    text-align: left;
  }
  .loadMoreButton {
    text-align: center;
    margin: 1em;
  }
  .noticefooter {
    margin-bottom: 7em;
  }
</style>
