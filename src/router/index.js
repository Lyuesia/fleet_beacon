import Vue from "vue"
import Router from "vue-router"
import homeContent from "../home/homeContent.vue"
// import charDB from "../charDB.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: homeContent
    },
    // {
    //   path: "/charDB",
    //   component: charDB
    // }
  ]
})
