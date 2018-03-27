import noticeBoard from "../notice/noticeBoard.vue"
import notice_1 from "../notice/noticePage/1.vue"

export default [
  {
    path: '/notice',
    component: noticeBoard
  },

  {
    path: '/notice/:id',
    component: notice_1
  }
]
