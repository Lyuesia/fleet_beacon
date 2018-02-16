<template lang="html">
  <div class="homeUpdateArea">
    <div class="homeUpdateTitle">
      <div class="titleSub">
        업데이트 내역
      </div>
    </div>
    <div class="homeUpdateList">
      <div class="listSub">
        2.14 업데이트 내역
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .homeUpdateArea {
    width: 46.5625%;
    z-index: 1;
    float: right;
    padding-right: 0.4rem;
  }
  .homeUpdateTitle {
    width: 100%;
    border: 1px solid #418cf2;
    border-radius: 10px;
    margin-bottom: 0.3125rem;
    background-color: #58a9f7;
    color: white;
  }
  .homeUpdateList {
    width: 100%;
    border: 1px solid #418cf2;
    border-radius: 10px;
  }
  .titleSub {
    border: 1px solid #7fbbf8;
    border-radius: 10px;
    padding-top: 0.28125rem;
    padding-bottom: 0.28125rem;
    padding-left: 0.4375rem;
    padding-right: 0.4375rem;
  }
  .listSub {
    padding-top: 0.5625rem;
    padding-bottom: 0.5625rem;
    padding-left: 0.375rem;
    padding-right: 0.365rem;
    border: 1px solid #7fbbf8;
    border-radius: 8.5px;
    height: 17.55rem;
  }
</style>
