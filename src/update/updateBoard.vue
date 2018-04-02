<template lang="html">
  <div class="updateBoardArea">
    <div class="fullBox outterBorder roundBorder updateBoardTitle">
      <div class="innerBorder roundBorder title">
        ㆎ업데이트 내역
      </div>
    </div>
    <div class="outterBorder">
      <table class="updateList">
        <tr class="updateListHeader">
          <th class="updateIdHeader">번호</th><th class="updateTitleHeader">제목</th><th class="updateWritterHeader">작성자</th><th class="updateTimeHeader">작성일</th>
        </tr>
        <tr class="updateListArticle" v-for="update in updateList">
          <td>{{ update.id }}</td><td class="updateListContent"><router-link :to="'/update/'+update.id">{{ update.title }}</router-link></td><td>{{ update.writer }}</td><td class="updateListTime">{{ update.time }}</td>
        </tr>
      </table>
    </div>
    <div class="loadMoreButton" v-if="loadMore">
      <img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/buttonImage/morebutton.png" @click="loadMoreNotice">
    </div>
    <div class="updatefooter">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateList: [],
      loadMore: false,
      updateLength: 20,
      lastIndex: 0
    }
  },
  mounted() {
    let self = this
    this.$http.post("/updatepageload", {
      updateLength: this.updateLength
    }).then((result) => {
      self.updateList = result.data
      self.lastIndex = self.updateList[self.updateList.length - 1].id
      if (self.updateList.length == self.updateLength) {
        self.loadMore = true
      }
    }).catch((error) => console.log(error))
  },
  methods: {
    loadMoreupdate() {
      let self = this
      this.$http.post("/updatepageloadmore", {
        updateLength: this.updateLength,
        lastIndex: this.lastIndex
      }).then((result) => {
        self.updateList.push.apply(self.updateList, result.data);
        self.lastIndex = self.updateList[self.updateList.length - 1].id
        if (self.updateList.length == self.updateLength) {
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
  .updateBoardArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .updateBoardTitle {
    margin-bottom: 5px;
  }
  .updateList {
    font-size: 14px;
    margin: 5px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    width: 99%;
  }
  .updateIdHeader {
    width: 5%;
  }
  .updateTitleHeader {
    width: 70%;
  }
  .updateWritterHeader {
    width: 10%;
  }
  .updateTimeHeader {
    width: 15%;
  }
  .updateListHeader {
    background-color: #bfd6f9;
  }
  .updateListArticle {
    background-color: #cce6ff;
  }
  .updateListTime {
    font-size: 10px;
  }
  .updateListContent {
    text-align: left;
  }
  .loadMoreButton {
    text-align: center;
    margin: 1em;
  }
</style>
