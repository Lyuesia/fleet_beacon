<template>
  <div class="main">
    <div class="page-content-space">
     <titleImg></titleImg>
     <topMenu></topMenu>
     <contentArea></contentArea>
     <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script>
  import titleImg from "./titleImg.vue"
  import topMenu from "./topMenu.vue"
  import contentArea from "./contentArea.vue"
  import pageFooter from "./pageFooter.vue"

  export default {
    components: {
      titleImg: titleImg,
      topMenu: topMenu,
      contentArea: contentArea,
      pageFooter: pageFooter
    }
  }
</script>

<style>
  * {
    border: border-box;
    font-family: "굴림", Gulim, Arial, sans-serif;
  }
  html, body {
    height: 100%;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  body {
    width: 60em;
    margin-left: auto;
    margin-right: auto;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  table, th, td {
    font-weight: normal;
  }
  table {
    border-collapse: collapse;
  }
  td {
    padding: 0;
  }
  .articleText p {
    padding: 0;
    line-height: 150%;
    font-size: 80%;
  }
  .charRecommendSubContentArea p {
    margin: 0.4em;
    padding: 0;
    line-height: 150%;
    font-size: 80%;
    text-align: left;
  }
  .main {
  }
  .page-content-space {
    width: 60em;
    padding-left: 5px;
    padding-right: 5px;
  }
  .innerBorder {
    border: 1px solid #7fbbf8;
  }
  .outterBorder {
    border: 1px solid #418cf2;
  }
  .roundBorder {
    border-radius: 10px;
  }
  .lightRoundBorder {
    border-radius: 3px;
  }
  .halfBox {
    width: 50%;
  }
  .thirdBox {
    width: 33.333333%;
  }
  .fourthBox {
    width: 25%;
  }
  .fullBox {
    width: 100%;
  }
  .lFloat {
    float: left;
  }
  .rFloat {
    float: right;
  }
  .title {
    padding-top: 0.43em;
    padding-bottom: 0.43em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    letter-spacing: 2px;
    color: white;
    background-color: #58a9f7;
  }
  .titleNoSpaceing {
    padding-top: 0.44em;
    padding-bottom: 0.44em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: white;
    background-color: #58a9f7;
  }
</style>
