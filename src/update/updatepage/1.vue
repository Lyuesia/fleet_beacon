<template lang="html">
<div class="updatePageArea">
  <div class="fullBox outterBorder roundBorder updatePageTitle">
    <div class="innerBorder roundBorder title">
      ㆎ업데이트 내역
    </div>
  </div>
  <div class="updateContentBox fullBox outterBorder">
    <div class="updateContentTitle fullBox">
      {{ updateData.title }}
      <span class="updateTime rFloat">{{ updateData.time }}</span>
    </div>
    <div class="updateContentArea fullBox">
      <div class="fullBox updateWriter">
        작성자: {{ updateData.writer }}
      </div>
      <div class="fullBox updateContent articleText" v-html="updateData.content"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      updateData: []
    }
  },
  mounted() {
    let self = this
    this.id = this.$route.params.id
    this.$http.post("/updatepage", {
      id: this.id
    }).then(function(result) {
      self.updateData = result.data[0]
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  .updatePageArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .updatePageTitle {
    margin-top: 0.3125em;
    margin-bottom: 5px;
  }
  .updateContentBox {
    background-color: white;
    margin-bottom: 7em;
  }
  .updateContentTitle {
    width: 96.8%;
    border: 2px solid white;
    background-color: #9abff5;
    padding: 0.5em;
    padding-left: 1em;
    font-weight: bold;
  }
  .updateTime {
    font-weight: normal;
    font-size: 80%;
  }
  .updateContentArea {
    padding-left: 0.7em;
  }
  .updateWriter {
    padding: 0.5em;
    padding-top: 0.4em;
    font-size: 80%;
  }
  .updateContent {
    width: 96.8%;
    padding-top: 1em;
  }
</style>
