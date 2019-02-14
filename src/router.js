import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */
import Doser from './views/Doser.vue'
import StartCrop from './views/StartCrop.vue'
import ManageCrops from './views/ManageCrops.vue'
import TransplantCrop from './views/TransplantCrop.vue'
import HarvestCrop from './views/HarvestCrop.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'doser', component: Doser },
    { path: '/start_crop', name:'start_crop', component: StartCrop },
    { path: '/manage_crops', name:'manage_crops', component: ManageCrops},
    { path: '/transplant_crop', name:'transplant_crop', component: TransplantCrop},
    { path: '/harvest_crop', name:'harvest_crop', component: HarvestCrop},
    {
      path: '/pheno_form',
      name: 'pheno_form',
      // route level code-splitting
      // this generates a separate chunk (pheno_form.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pheno_form" */ './views/PhenoForm.vue')
    }
  ]
})
