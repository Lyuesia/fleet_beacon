import equipGunDB from "../equipment/equipGunDB/equipGunDB.vue"
import equipTorpedoDB from "../equipment/equipTorpedoDB/equipTorpedoDB.vue"
import equipAntiairDB from "../equipment/equipAntiairDB/equipAntiairDB.vue"
import equipPlaneDB from "../equipment/equipPlaneDB/equipPlaneDB.vue"
import equipSupportDB from "../equipment/equipSupportDB/equipSupportDB.vue"
import equipDropSpots from "../equipment/equipDropSpots/equipDropSpots.vue"

export default [
  {
    path: '/equipGunDB',
    component: equipGunDB
  },
  {
    path: '/equipTorpedoDB',
    component: equipTorpedoDB
  },
  {
    path: '/equipAntiairDB',
    component: equipAntiairDB
  },
  {
    path: '/equipPlaneDB',
    component: equipPlaneDB
  },
  {
    path: '/equipSupportDB',
    component: equipSupportDB
  },
  {
    path: "/equipDropSpots",
    component: equipDropSpots
  }
]
