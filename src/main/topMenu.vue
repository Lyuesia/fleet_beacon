<template lang="html">
  <div class="menu-bar-space">
    <div class="top-menu">
      <router-link to="/">홈</router-link>
    </div>
    <div class="top-menu">
      <a class="top-menu-link" @click="topMenu2=!topMenu2">이벤트 정보</a>
      <!-- <div class="dropdown-menu">
        <a class="sub-menu" href="#">이벤트 임무</a>
        <a class="sub-menu" href="#">이벤트 해역 공략</a>
        <a class="sub-menu" href="#">이벤트 BGM</a>
        <a class="sub-menu" href="#">이벤트 해역 드랍</a>
      </div> -->
    </div>
    <div class="top-menu">
      <a class="top-menu-link" @click="topMenu3=!topMenu3">메인 스토리 정보</a>
      <!-- <div class="dropdown-menu">
        <a class="sub-menu" href="#">1장</a>
        <a class="sub-menu" href="#">2장</a>
        <a class="sub-menu" href="#">3장</a>
        <a class="sub-menu" href="#">4장</a>
      </div> -->
    </div>
    <div class="top-menu">
      <a  class="top-menu-link" @click="topMenu4=!topMenu4" v-bind:class="{ active: topMenu4 }">캐릭터 정보</a>
      <div class="dropdown-menu" v-if="topMenu4">
        <router-link to="/charDB">캐릭터 DB</router-link>
        <router-link to="/characterbuildlist">건조시간표</router-link>
        <!-- <a class="sub-menu" href="#">캐릭터 개조 정보</a>
        <a class="sub-menu" href="#">캐릭터 스킨 일람</a>
        <a class="sub-menu" href="#">해역별 드롭 캐릭터</a> -->
      </div>
    </div>
    <div class="top-menu">
      <a class="top-menu-link" @click="topMenu5=!topMenu5">장비 정보</a>
      <!-- <div class="dropdown-menu">
        <a class="sub-menu" href="#">장비 DB</a>
        <a class="sub-menu" href="#">장비 스킨 일람</a>
        <a class="sub-menu" href="#">해역별 드롭 장비</a>
      </div> -->
    </div>
    <div class="top-menu">
      <a class="top-menu-link" @click="topMenu6=!topMenu6" v-bind:class="{ active: topMenu6 }">게임플레이 팁</a>
      <div class="dropdown-menu" v-if="topMenu6">
        <router-link class="sub-menu" to="/charactersSelectionTips">함선 추천</router-link>
        <!-- <router-link class="sub-menu" to="/equipSelectionTips">장비 추천</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topMenu1: false,
      topMenu2: false,
      topMenu3: false,
      topMenu4: false,
      topMenu5: false,
      topMenu6: false
    }
  }
}

</script>
  <style>
  .menu-bar-space {
    height: 3.75em;
    background-color: #699bf0;
    display: block;
  }
  .top-menu {
    display: block;
    width: 16.6666%;
    text-align: center;
    text-decoration: none;
    color: white;
    float: left;
    font-size: 16px;
  }
  .top-menu:hover>a{
    background-color: #1e69eb;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
  .top-menu>a {
    display: block;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
  .dropdown-menu {
    position: relative;
    z-index: 1000;
    float: left;
    text-align: center;
    background-color: #fff;
    min-width: 7.8125em;
    border: 1px solid rgba(0,0,0,.15);
    border-top: 0px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    margin-top: -6px;
  }
  .dropdown-menu>a {
    display: block;
    background-color: #f9f9f9;
    min-width: 7.8125em;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
  }
  .dropdown-menu>a {
    color: black;
    padding: 1.05em;
  }
  .dropdown-menu>a:hover {
    background-color: #c1c1c1;
  }
  .active {
    background-color: #1e69eb;
  }
</style>
