<template lang="html">
  <div class="menu-bar-space">
    <div class="top-menu">
      <router-link v-on:click.native="closeAllDropdown" class="useable" to="/">홈</router-link>
    </div>
    <div class="top-menu">
      <a class="top-menu-link useable" @click="topMenu2=!topMenu2" v-bind:class="{ active: topMenu2 }">이벤트 정보</a>
      <div class="dropdown-menu eventDropdown" v-if="topMenu2">
        <router-link v-on:click.native="closeAllDropdown" to="/minievent/3">영광된 최종전</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/bigevent/1">홍염의 방문자</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/questevent/2">가르쳐줘! Z23 선생님! (일)</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/questevent/3">가르쳐줘! Z23 선생님! (한)</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/questevent/1">아카시의 부탁</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/eventlist">지나간 이벤트 목록</router-link>
        <!-- <a class="sub-menu" href="#">이벤트 임무</a>
        <a class="sub-menu" href="#">이벤트 해역 공략</a>
        <a class="sub-menu" href="#">이벤트 BGM</a>
        <a class="sub-menu" href="#">이벤트 해역 드랍</a> -->
      </div>
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
      <a  class="top-menu-link useable" @click="topMenu4=!topMenu4" v-bind:class="{ active: topMenu4 }">캐릭터 정보</a>
      <div class="dropdown-menu" v-if="topMenu4">
        <router-link v-on:click.native="closeAllDropdown" to="/charDB">캐릭터 DB</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/characterbuildlist">건조시간표</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/characterDropSpots">해역별 함선드랍</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/characterRemodelInfo">함선 개조 정보</router-link>
        <!-- <a class="sub-menu" href="#">캐릭터 개조 정보</a>
        <a class="sub-menu" href="#">캐릭터 스킨 일람</a>
        <a class="sub-menu" href="#">해역별 드롭 캐릭터</a> -->
      </div>
    </div>
    <div class="top-menu">
      <a  class="top-menu-link useable" @click="topMenu5=!topMenu5" v-bind:class="{ active: topMenu5 }">장비 정보</a>
      <div class="dropdown-menu" v-if="topMenu5">
        <router-link v-on:click.native="closeAllDropdown" to="/equipGunDB">함포 DB</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/equipPlaneDB">함재기 DB</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/equipTorpedoDB">어뢰 DB</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/equipAntiairDB">대공포 DB</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/equipSupportDB">보조장비 DB</router-link>
        <router-link v-on:click.native="closeAllDropdown" to="/equipDropSpots">해역별 장비드랍</router-link>
      <!-- <div class="dropdown-menu">
        <a class="sub-menu" href="#">장비 DB</a>
        <a class="sub-menu" href="#">장비 스킨 일람</a>
        <a class="sub-menu" href="#">해역별 드롭 장비</a>
      </div> -->
      </div>
    </div>
    <div class="top-menu">
      <a class="top-menu-link useable" @click="topMenu6=!topMenu6" v-bind:class="{ active: topMenu6 }">게임플레이 팁</a>
      <div class="dropdown-menu" v-if="topMenu6">
        <router-link class="sub-menu largedropdown" v-on:click.native="closeAllDropdown" to="/characterExperienceCalculator">숙소 경험치 계산기</router-link>
        <router-link class="sub-menu" v-on:click.native="closeAllDropdown" to="/characterBuildSimulator">건조 시뮬레이터</router-link>
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
  },
  methods: {
    closeAllDropdown() {
      this.topMenu1 = false
      this.topMenu2 = false
      this.topMenu3 = false
      this.topMenu4 = false
      this.topMenu5 = false
      this.topMenu6 = false
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
  .top-menu:hover>a.useable{
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
  .eventDropdown {
    font-size: 90%;
  }
  .largedropdown{
    font-size: 90%;
  }
</style>
