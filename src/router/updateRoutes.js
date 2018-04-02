import update_1 from "../update/updatePage/1.vue"
import updateBoard from "../update/updateBoard.vue"

export default [
  {
    path: '/update/:id',
    component: update_1
  },
  {
    path: "/update",
    component: updateBoard
  }
]
