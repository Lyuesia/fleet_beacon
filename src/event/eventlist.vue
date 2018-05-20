<template>
  <div class="eventListArea">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ 이벤트 목록
      </div>
    </div>
    <div class="eventListTableArea">
      <table class="fullBox">
        <colgroup>
          <col width="30%">
          <col width="70%">
        </colgroup>
        <tr>
          <th>이벤트 종류</th><th>이벤트명</th>
        </tr>
        <tr>
          <td>포인트 이벤트</td><td><router-link to="/pointevent/1">만두대작전</router-link></td>
        </tr>
        <tr>
          <td>미니 이벤트</td><td><router-link to="/minievent/1">그라프 쉬페 추격전</router-link></td>
        </tr>
        <tr>
          <td>미니 이벤트</td><td><router-link to="/minievent/2">노력, 희망과 계획</router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
table,th, td {
  text-align: center;
  border: 1px solid black;
  padding: 0.5em;
}
table>tr>th {
  background-color: #bad3f9;
}
table {
  border-collapse:collapse;
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
