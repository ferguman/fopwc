import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */
//import Doser from './views/Doser.vue'
import StartCrop from './views/StartCrop.vue'
import ManageCrops from './views/ManageCrops.vue'
import TransplantCrop from './views/TransplantCrop.vue'
import HarvestCrop from './views/HarvestCrop.vue'
import Devices from './views/Devices.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name:'default', component: Login},
    { path: '/devices', name:'devices', component: Devices},
    { path: '/login', name:'login', component: Login},
    { path: '/logout', name:'logout', component: Login},
    { path: '/start_crop', name:'start_crop', component: StartCrop, meta: {requiresAuth: true}},
    { path: '/manage_crops', name:'manage_crops', component: ManageCrops, meta: {requiresAuth: true}},
    { path: '/transplant_crop', name:'transplant_crop', component: TransplantCrop, meta: {requiresAuth: true}},
    { path: '/harvest_crop', name:'harvest_crop', component: HarvestCrop, meta: {requiresAuth: true}},
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
