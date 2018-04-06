import Vue from 'vue'
import main from './main/main.vue'
import router from "./router"
import axios from 'axios'
import VueAnalytics from 'vue-analytics'

Vue.prototype.$http = axios

Vue.use(VueAnalytics, {
  id: 'UA-116491021-1',
  checkDuplicatedScript: true,
  router
})

new Vue({
  el: '.main',
  router,
  render: h => h(main)
})
