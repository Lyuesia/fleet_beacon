import reportWritePage from "../report/reportWritePage/reportWritePage.vue"
import reportBoard from "../report/reportBoard/reportBoard.vue"
import reportPage from "../report/reportPage/reportPage.vue"

export default [
  {
    path: '/reportWrite',
    component: reportWritePage
  },
  {
    path: '/report',
    component: reportBoard
  },

  {
    path: '/report/:id',
    component: reportPage
  }
]
