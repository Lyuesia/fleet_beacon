<template lang="html">
  <div class="charDBArea">
    <charDBTitle></charDBTitle>
    <charDBFilter></charDBFilter>
  </div>
</template>

<script>
import charDBTitle from "./charDBTitle.vue"
import charDBFilter from "./charDBFilter.vue"

export default {
  data() {
    return {
    }
  },
  components: {
    charDBTitle,
    charDBFilter
  }
}
</script>

<style scoped>
  .charDBArea {
    width: 100%;
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
</style>
