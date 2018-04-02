<template lang="html">
  <div class="homeUpdateArea rFloat">
    <div class="homeUpdateTitle fullBox outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
        ㆎ업데이트 내역
        <span class="rFloat homeUpdateExtend"><router-link to="/update">more</router-link></span>
      </div>
    </div>
    <div class="homeUpdateList fullBox outterBorder roundBorder">
      <div class="listSub innerBorder">
        <ul>
          <li class="update"v-for="update in updateList">
            <router-link :to="'/update/'+update.id">
              {{ update.title }}
            </router-link>
            <span class="rFloat homeUpdateTime">{{ update.time }}</span>
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
      updateList: []
    }
  },
  mounted() {
    let self = this
    this.$http.get("/homeupdate").then((result) => {
      self.updateList = result.data
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
  .homeUpdateArea {
    width: 46.5625%;
    z-index: 1;
    padding-right: 0.4em;
  }
  .homeUpdateTitle {
    margin-bottom: 0.3125em;
  }
  .homeUpdateList {
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
  .update {
    padding: 0.1em
  }
  .homeUpdateExtend {
    line-height: 1.4em;
    padding-right: 0.5em;
    font-size: 12px;
    letter-spacing: 2px;
  }
  .homeUpdateTime {
    font-size: 80%;
  }
</style>
