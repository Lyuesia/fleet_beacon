import charactersSelectionTips from "../tips/charactersSelectionTips.vue"
import equipSelectionTips from "../tips/equipSelectionTips.vue"
import characterBuildSimulator from "../tips/characterBuildSimulator.vue"
// import characterBuildSimulatortest from "../tips/characterBuildSimulatortest.vue"

export default [
    {
      path: '/charactersSelectionTips',
      component: charactersSelectionTips
    },
    {
      path: "/equipSelectionTips",
      component: equipSelectionTips
    },
    {
      path: "/characterBuildSimulator",
      component: characterBuildSimulator
    },
    // {
    //   path: "/characterBuildSimulatortest",
    //   component: characterBuildSimulatortest
    // }
  ]
