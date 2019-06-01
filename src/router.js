import Vue from 'vue'
import Router from 'vue-router'

// import all the views here
import Config from './views/Config.vue'
import FoodComputerView from './views/FoodComputerView.vue'
import HarvestCrop from './views/HarvestCrop.vue'
import Login from './views/Login.vue'
import ManageCrops from './views/ManageCrops.vue'
import NewSystem from './views/NewSystem.vue'
import PasswordReset from './views/PasswordReset.vue'
import Phenome from './components/PhenoForm.vue'
import Racks from './views/Racks.vue'
import StartCrop from './views/StartCrop.vue'
import Systems from './views/Systems.vue'
import TransplantCrop from './views/TransplantCrop.vue'
import Visitor from './views/Visitor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name:'visitor', component: Visitor},
    { path: '/config', name:'config', component: Config},
    { path: '/food_computer_view', name:'food_computer_view', component: FoodComputerView},
    { path: '/phenome', name: 'phenome', component: Phenome, meta: {requiresAuth: true}},
    { path: '/harvest_crop', name:'harvest_crop', component: HarvestCrop, meta: {requiresAuth: true}},
    { path: '/login', name:'login', component: Login},
    { path: '/manage_crops', name:'manage_crops', component: ManageCrops, meta: {requiresAuth: true}},
    { path: '/new_system', name:'new_system', component: NewSystem},
    { path: '/password_reset', name:'password_reset', component: PasswordReset},
    { path: '/racks', name:'racks', component: Racks, meta: {requiresAuth: true}},
    { path: '/start_crop', name:'start_crop', component: StartCrop, meta: {requiresAuth: true}},
    { path: '/systems', name:'systems', component: Systems},
    { path: '/transplant_crop', name:'transplant_crop', component: TransplantCrop, meta: {requiresAuth: true}},
    { path: '/pheno_form', name: 'pheno_form',
      // route level code-splitting
      // this generates a separate chunk (pheno_form.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pheno_form" */ './views/PhenoForm.vue')
    }
  ]
})
