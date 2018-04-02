<template lang="html">
  <div class="homeNoticeArea lFloat">
    <div class="homeNoticeTitle fullBox outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
        ㆎ공지사항
        <span class="rFloat homeNoticeExtend"><router-link to="/notice">more</router-link></span>
      </div>
    </div>
    <div class="homeNoticeList fullBox outterBorder roundBorder">
      <div class="listSub innerBorder">
        <ul>
          <li class="notice"v-for="notice in noticeList">
            <router-link :to="'/notice/'+notice.id">
              {{ notice.title }}
            </router-link>
            <span class="rFloat homeNoticeTime">{{ notice.time }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      noticeList: []
    }
  },
  mounted() {
    let self = this
    this.$http.get("/homenotice").then((result) => {
      self.noticeList = result.data
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  .homeNoticeArea {
    width: 46.5625%;
    z-index: 1;
    padding-left: 0.4em;
  }
  .homeNoticeTitle {
    margin-bottom: 0.3125em;
  }
  .homeNoticeList {
    font-size: 14px
  }
  .listSub {
    padding-top: 0.5625em;
    padding-bottom: 0.5625em;
    padding-left: 0.375em;
    padding-right: 0.365em;
    border-radius: 8.5px;
    height: 17.55em;
  }
  .notice {
    padding: 0.1em
  }
  .homeNoticeExtend {
    line-height: 1.4em;
    padding-right: 0.5em;
    font-size: 12px;
    letter-spacing: 2px;
  }
  .homeNoticeTime {
    font-size: 80%;
  }
</style>
