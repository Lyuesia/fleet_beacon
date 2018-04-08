import Vue from "vue"
import Router from "vue-router"
import homeContent from "../home/homeContent.vue"
import charactersRoutes from "./charactersRoutes.js"
import noticesRoutes from "./noticesRoutes.js"
import tipsRoutes from "./tipsRoutes.js"
import updateRoutes from "./updateRoutes.js"
import eventsRoutes from "./eventsRoutes.js"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: homeContent
    },
    ...noticesRoutes,
    ...tipsRoutes,
    ...charactersRoutes,
    ...updateRoutes,
    ...eventsRoutes
  ]
})
