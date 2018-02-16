import Vue from 'vue'
import main from './main/main.vue'
import router from "./router"


new Vue({
  el: '.main',
  router,
  render: h => h(main)
})
