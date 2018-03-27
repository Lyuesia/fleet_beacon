import Vue from 'vue'
import main from './main/main.vue'
import router from "./router"
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  el: '.main',
  router,
  render: h => h(main)
})
