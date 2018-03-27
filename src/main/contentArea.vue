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

<style>
  .contentArea {
    position: absolute;
    background-color: #e7f6ff;
    width: 60em;
    min-height: 50em;
    z-index: 0;
  }
  .articleArea {
    padding-top: 2.0625em;
    padding-left: 2.375em;
    padding-right: 2.375em;
  }
</style>
