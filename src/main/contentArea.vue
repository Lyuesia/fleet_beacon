<template lang="html">
  <div class="contentArea">
    <div class="articleArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .contentArea {
    position: absolute;
    background-color: #e7f6ff;
    width: 60rem;
    min-height:50rem;
    z-index: 0;
  }
  .articleArea {
    padding-top: 2.0625rem;
    padding-left: 2.375rem;
    padding-right: 2.375rem;
  }
</style>
