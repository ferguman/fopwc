import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */
//import Doser from './views/Doser.vue'
//- import APISessionReminder from './views/APISessionReminder.vue'
import StartCrop from './views/StartCrop.vue'
import ManageCrops from './views/ManageCrops.vue'
import TransplantCrop from './views/TransplantCrop.vue'
import HarvestCrop from './views/HarvestCrop.vue'
import Systems from './views/Systems.vue'
import Login from './views/Login.vue'
import Visitor from './views/Visitor.vue'
import Config from './views/Config.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name:'visitor', component: Visitor},
    //{ path: '/api_session_reminder', name:'api_session_reminder', component: APISessionReminder},
    { path: '/systems', name:'systems', component: Systems},
    { path: '/config', name:'config', component: Config},
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
