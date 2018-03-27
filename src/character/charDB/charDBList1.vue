<template lang="html">
  <div class="charListArea">
    <div class="charListNavBar">
      <div class="fullBox outterBorder lightRoundBorder">
        <div class="innerBorder title">
          <div class="statNav lFloat">
            No.
          </div>
          <div class="statNav lFloat">
            아이콘
          </div>
          <div class="statNav lFloat">
            이름
          </div>
          <div class="statNav lFloat">
            위치
          </div>
          <div class="statNav lFloat">
            함종
          </div>
          <div class="statNav lFloat">
            진영
          </div>
          <div class="statNav lFloat">
            내구
          </div>
          <div class="statNav lFloat">
            포격
          </div>
          <div class="statNav lFloat">
            뇌장
          </div>
          <div class="statNav lFloat">
            장갑
          </div>
          <div class="statNav lFloat">
            장전
          </div>
          <div class="statNav lFloat">
            기동
          </div>
          <div class="statNav lFloat">
            대공
          </div>
          <div class="statNav lFloat">
            항공
          </div>
          <div class="statNav lFloat">
            연비
          </div>
          <div class="statNav lastStat">
            항속
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li class="charList">
        <span class="stats">5</span>
        <span class="stats"></span>
        <router-link :to="{ name: '', params: {} }"><img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/characterIconImage/1.png" alt="" height="70">
        </router-link>
        <span class="stats">100</span>
        <span class="stats">101</span>
        <span class="stats">102</span>
        <span class="stats">103</span>
        <span class="stats">104</span>
        <span class="stats">105</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .statNav {
    letter-spacing: 2px;
    font-size: 14px;
    padding: 0.2rem;
    width: 5.5%;
  }
  .lastStat {
    display: inline-block;
  }
  .charList {
    margin-top: 10px;
    border: 2px solid rgb(0, 255, 240);
    border-top: none;
    border-right: none;
  }
  .stats {
    width: 100%;
  }
</style>
