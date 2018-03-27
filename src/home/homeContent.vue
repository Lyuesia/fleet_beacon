<template lang="html">
  <div class="homeNoticeUpdate">
    <homeNotice></homeNotice>
    <homeUpdate></homeUpdate>
  </div>
</template>

<script>
import homeNotice from "./homeNotice.vue"
import homeUpdate from "./homeUpdate.vue"
export default {
  components: {
    homeNotice: homeNotice,
    homeUpdate: homeUpdate
  }
}
</script>

<style scoped>
</style>
