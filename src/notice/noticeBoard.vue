<template lang="html">
  <div class="noticeBoardArea">
    <div class="fullBox outterBorder roundBorder noticeBoardTitle">
      <div class="innerBorder roundBorder title">
        공지사항
      </div>
    </div>
    <div class="outterBorder">
      <table class="noticeList">
        <tr class="noticeListHeader">
          <th class="noticeIdHeader">번호</th><th class="noticeTitleHeader">제목</th><th class="noticeWritterHeader">작성자</th><th class="noticeTimeHeader">작성일</th>
        </tr>
        <tr class="noticeListArticle">
          <td>10</td><td class="noticeListContent">test2</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>9</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>8</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>7</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>6</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>5</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>4</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>3</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>2</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td>1</td><td class="noticeListContent">알난량프낭니창충녀춤마읓</td><td>lyuesia</td><td class="noticeListTime">2018-3-9 11:30:44</td>
        </tr>
        <tr class="noticeListArticle">
          <td></td><td></td><td></td><td></td>
        </tr>
      </table>
    </div>
    <div class="noticefooter">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  table {
    border-collapse: separate;
    border-spacing: 0 5px;
  }
  tr {
  }
  th {
    padding: 0.5em;
  }
  td {
    padding: 0.2em;
    height: 1.5em;
  }
  .noticeBoardArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .noticeBoardTitle {
    margin-bottom: 5px;
  }
  .noticeList {
    font-size: 14px;
    margin: 5px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    width: 99%;
  }
  .noticeIdHeader {
    width: 5%;
  }
  .noticeTitleHeader {
    width: 70%;
  }
  .noticeWritterHeader {
    width: 10%;
  }
  .noticeTimeHeader {
    width: 15%;
  }
  .noticeListHeader {
    background-color: #bfd6f9;
  }
  .noticeListArticle {
    background-color: #cce6ff;
  }
  .noticeListTime {
    font-size: 10px;
  }
  .noticeListContent {
    text-align: left;
  }
</style>
