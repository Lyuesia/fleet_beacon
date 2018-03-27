<template lang="html">
  <div class="charListArea">
    <table class="charListTable">
      <tr class="outterBorder lightRoundBorder charListNavBar fullBox">
        <th class="statNav normalStatNav">No.</th>
        <th class="statNav iconStatNav">아이콘</th>
        <th class="statNav nameStatNav">이름</th>
        <th class="statNav normalStatNav">위치</th>
        <th class="statNav normalStatNav">함종</th>
        <th class="statNav normalStatNav">진영</th>
        <th class="statNav normalStatNav">내구</th>
        <th class="statNav normalStatNav">장갑</th>
        <th class="statNav normalStatNav">포격</th>
        <th class="statNav normalStatNav">뇌장</th>
        <th class="statNav normalStatNav">장전</th>
        <th class="statNav normalStatNav">기동</th>
        <th class="statNav normalStatNav">대공</th>
        <th class="statNav normalStatNav">항공</th>
        <th class="statNav normalStatNav">연비</th>
        <th class="statNav normalStatNav">항속</th>
      </tr>
      <tr class="charList">
        <td class="id">1</td>
        <td class="stats">
          <router-link to="/characters/1">
            <img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/characterIconImage/1.png" alt="" height="70">
          </router-link>
        </td>
        <td class="stats">
          <router-link to="/characters/1">
            범용형 부린
          </router-link>
        </td>
        <td class="stats">전열</td>
        <td class="stats">구축함</td>
        <td class="stats">불명</td>
        <td class="stats">1000</td>
        <td class="stats">중</td>
        <td class="stats">1000</td>
        <td class="stats">100</td>
        <td class="stats">101</td>
        <td class="stats">102</td>
        <td class="stats">103</td>
        <td class="stats">104</td>
        <td class="stats">105</td>
        <td class="stats">106</td>
      </tr>
      <tr class="charList">
        <td class="id">1</td>
        <td class="stats">
          <router-link :to="{ name: '', params: {} }">
            <img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/characterIconImage/1.png" alt="" height="70">
          </router-link>
        </td>
        <td class="stats">
          <router-link :to="{ name: '', params: {} }">
            범용형 부린
          </router-link>
        </td>
        <td class="stats">전열</td>
        <td class="stats">구축함</td>
        <td class="stats">불명</td>
        <td class="stats">1000</td>
        <td class="stats">중</td>
        <td class="stats">1000</td>
        <td class="stats">100</td>
        <td class="stats">101</td>
        <td class="stats">102</td>
        <td class="stats">103</td>
        <td class="stats">104</td>
        <td class="stats">105</td>
        <td class="stats">106</td>
      </tr>
      <tr class="charList">
        <td class="id">1</td>
        <td class="stats">
          <router-link :to="{ name: '', params: {} }">
            <img src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/characterIconImage/1.png" alt="" height="70">
          </router-link>
        </td>
        <td class="stats">
          <router-link :to="{ name: '', params: {} }">
            범용형 부린
          </router-link>
        </td>
        <td class="stats">전열</td>
        <td class="stats">구축함</td>
        <td class="stats">불명</td>
        <td class="stats">1000</td>
        <td class="stats">중</td>
        <td class="stats">1000</td>
        <td class="stats">100</td>
        <td class="stats">101</td>
        <td class="stats">102</td>
        <td class="stats">103</td>
        <td class="stats">104</td>
        <td class="stats">105</td>
        <td class="stats">106</td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .charListTable {
    text-align: center;
    border-collapse: separate;
    border-spacing: 0px 10px;
  }
  .charListNavBar {
    color: white;
    background-color: #58a9f7;
  }
  .statNav {
    letter-spacing: 2px;
    font-size: 14px;
    padding: 0.4em;
  }
  .normalStatNav {
    width: 5.34%;
  }
  .iconStatNav {
    width: 11%;
  }
  .nameStatNav {
    width: 15%
  }
  .charList {
    margin-top: 2px;
    font-size: 14px;
  }
  .stats {
    border: 2px solid #a6f0ff;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  .id {
    border: 2px solid #a6f0ff;
    border-top: none;
    border-right: none;
  }
</style>
