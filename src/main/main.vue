<template>
  <div class="main">
    <div class="page-content-space">
     <titleImg></titleImg>
     <topMenu></topMenu>
     <contentArea></contentArea>
    </div>
  </div>
</template>

<script>
  import titleImg from "./titleImg.vue"
  import topMenu from "./topMenu.vue"
  import contentArea from "./contentArea.vue"
  export default {
    components: {
      titleImg: titleImg,
      topMenu: topMenu,
      contentArea: contentArea,
    }
  }
</script>

<style>
  * {
    border: border-box;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  body {
    width: 60rem;
    margin-left: auto;
    margin-right: auto;
  }
  .main {
  }
  .page-content-space {
    width: 60rem;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
