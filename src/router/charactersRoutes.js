import charDB from "../character/charDB/charDB.vue"
import char_1 from "../character/characterPage/1.vue"
import characterBuildPage from "../character/characterBuildPage/characterBuildPage.vue"
export default [
  {
    path: "/charDB",
    component: charDB
  },
  {
    path: '/characters/:id',
    component: char_1
  },
  {
    path: '/characterbuildlist',
    component: characterBuildPage
  }
]
