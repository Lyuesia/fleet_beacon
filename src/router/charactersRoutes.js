import charDB from "../character/charDB/charDB.vue"
import char_1 from "../character/characterPage/1.vue"
import characterBuildPage from "../character/characterBuildPage/characterBuildPage.vue"
import characterDropSpots from "../character/characterDropSpots/characterDropSpots.vue"
import characterRemodelInfo from "../character/characterRemodel/characterRemodelInfo.vue"
// import charpagetest from "../character/characterPage/test.vue"
// import charDBTest from "../character/charDB/charDBFilterTest.vue"

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
  },
  {
    path: "/characterDropSpots",
    component: characterDropSpots
  },
  {
    path: "/characterRemodelInfo",
    component: characterRemodelInfo
  },
  // {
  //   path: "/characterstest/:id",
  //   component: charpagetest
  // }
  // {
  //   path: "/charDBTest",
  //   component: charDBTest
  // }
]
