import minievent from "../event/mini_event.vue"
import eventlist from "../event/eventlist.vue"
import pointevent from "../event/point_event.vue"
import questevent from "../event/quest_event.vue"
import bigevent from "../event/big_event.vue"

export default [
  {
    path: '/minievent/:eventIndex',
    component: minievent
  },
  {
    path: '/bigevent/:eventIndex',
    component: bigevent
  },
  {
    path: "/eventlist",
    component: eventlist
  },
  {
    path: "/pointevent/:eventIndex",
    component: pointevent
  },
  {
    path: "/questevent/:eventIndex",
    component: questevent
  }
]
