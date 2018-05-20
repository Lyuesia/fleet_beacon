<template lang="html">
<div class="reportPageArea">
  <div class="fullBox outterBorder roundBorder reportPageTitle">
    <div class="innerBorder roundBorder title">
      ㆎ 건의사항
    </div>
  </div>
  <div class="reportContentBox fullBox outterBorder">
    <div class="reportContentTitle fullBox">
      {{ reportData.title }}
      <span class="reportTime rFloat">{{ reportData.writetime }}</span>
    </div>
    <div class="reportContentArea fullBox">
      <div class="fullBox reportWriter">
        작성자: {{ reportData.nicname }} ({{ reportData.ipAddress }})
      </div>
      <div class="fullBox reportContent articleText" v-html="reportData.content"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      reportData: []
    }
  },
  mounted() {
    let self = this
    this.id = this.$route.params.id
    this.$http.post("/reportpage", {
      id: this.id
    }).then(function(result) {
      self.reportData = result.data[0]
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  .reportPageArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .reportPageTitle {
    margin-top: 0.3125em;
    margin-bottom: 5px;
  }
  .reportContentBox {
    background-color: white;
    min-height: 30em;
    margin-bottom: 7em;
  }
  .reportContentTitle {
    width: 96.8%;
    border: 2px solid white;
    background-color: #9abff5;
    padding: 0.5em;
    padding-left: 1em;
    font-weight: bold;
  }
  .reportTime {
    font-weight: normal;
    font-size: 80%;
  }
  .reportContentArea {
    padding-left: 0.7em;
  }
  .reportWriter {
    padding: 0.5em;
    padding-top: 0.4em;
    font-size: 80%;
  }
  .reportContent {
    width: 96.8%;
    padding-top: 1em;
  }
</style>
