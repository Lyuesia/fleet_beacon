<template lang="html">
<div class="noticePageArea">
  <div class="fullBox outterBorder roundBorder noticePageTitle">
    <div class="innerBorder roundBorder title">
      ㆎ공지사항
    </div>
  </div>
  <div class="noticeContentBox fullBox outterBorder">
    <div class="noticeContentTitle fullBox">
      {{ noticeData.title }}
      <span class="noticeTime rFloat">{{ noticeData.time }}</span>
    </div>
    <div class="noticeContentArea fullBox">
      <div class="fullBox noticeWriter">
        작성자: {{ noticeData.writer }}
      </div>
      <div class="fullBox noticeContent articleText" v-html="noticeData.content"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      noticeData: []
    }
  },
  mounted() {
    let self = this
    this.id = this.$route.params.id
    this.$http.post("/noticepage", {
      id: this.id
    }).then(function(result) {
      self.noticeData = result.data[0]
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  .noticePageArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .noticePageTitle {
    margin-top: 0.3125em;
    margin-bottom: 5px;
  }
  .noticeContentBox {
    background-color: white;
    margin-bottom: 7em;
  }
  .noticeContentTitle {
    width: 96.8%;
    border: 2px solid white;
    background-color: #9abff5;
    padding: 0.5em;
    padding-left: 1em;
    font-weight: bold;
  }
  .noticeTime {
    font-weight: normal;
    font-size: 80%;
  }
  .noticeContentArea {
    padding-left: 0.7em;
  }
  .noticeWriter {
    padding: 0.5em;
    padding-top: 0.4em;
    font-size: 80%;
  }
  .noticeContent {
    width: 96.8%;
    padding-top: 1em;
  }
</style>
