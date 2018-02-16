<template lang="html">
  <div class="menu-bar-space">
    <div class="top-menu">
      <router-link to="/">홈</router-link>
    </div>
    <div class="top-menu">
      <a href="#" class="top-menu-link">이벤트 정보</a>
      <div class="dropdown-menu">
        <a class="sub-menu" href="#">이벤트 임무</a>
        <a class="sub-menu" href="#">이벤트 해역 공략</a>
        <a class="sub-menu" href="#">이벤트 BGM</a>
        <a class="sub-menu" href="#">이벤트 해역 드랍</a>
      </div>
    </div>
    <div class="top-menu">
      <a href="#" class="top-menu-link">메인 스토리 정보</a>
      <div class="dropdown-menu">
        <a class="sub-menu" href="#">1장</a>
        <a class="sub-menu" href="#">2장</a>
        <a class="sub-menu" href="#">3장</a>
        <a class="sub-menu" href="#">4장</a>
      </div>
    </div>
    <div class="top-menu">
      <a href="#" class="top-menu-link">캐릭터 정보</a>
      <div class="dropdown-menu">
        <router-link to="/charDB">캐릭터 DB</router-link>
        <!-- <a class="sub-menu" href="#">캐릭터 DB</a> -->
        <a class="sub-menu" href="#">캐릭터 개조 정보</a>
        <a class="sub-menu" href="#">캐릭터 스킨 일람</a>
        <a class="sub-menu" href="#">해역별 드롭 캐릭터</a>
      </div>
    </div>
    <div class="top-menu">
      <a href="#" class="top-menu-link">장비 정보</a>
      <div class="dropdown-menu">
        <a class="sub-menu" href="#">장비 DB</a>
        <a class="sub-menu" href="#">장비 스킨 일람</a>
        <a class="sub-menu" href="#">해역별 드롭 장비</a>
      </div>
    </div>
    <div class="top-menu">
      <a href="#" class="top-menu-link">게임플레이 팁</a>
      <div class="dropdown-menu">
        <a class="sub-menu" href="#">중섭 티어표</a>
        <a class="sub-menu" href="#">편성 추천</a>
        <a class="sub-menu" href="#">장비 추천</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}

</script>
  <style lang="css">
  .menu-bar-space {
    height: 3.75rem;
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
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .top-menu>a {
    display: block;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .dropdown-menu {
    display: none;
    position: relative;
    z-index: 1000;
    float: left;
    text-align: center;
    background-color: #fff;
    min-width: 7.8125rem;
    border: 1px solid rgba(0,0,0,.15);
    border-top: 0px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    margin-top: -0.5px;
  }
  .dropdown-menu>a {
    display: block;
    background-color: #f9f9f9;
    min-width: 7.8125rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
  }
  .top-menu:hover .dropdown-menu {
    display: block;
  }
  .dropdown-menu>a {
    color: black;
    padding: 1.05rem;
  }
  .dropdown-menu>a:hover {
    background-color: #c1c1c1;
  }
</style>
