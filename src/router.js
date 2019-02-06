import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */
import Doser from './views/Doser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'doser',
      // component: () => import(/* webpackChunkName: "doser" */ './views/Doser.vue')
      component: Doser 
    },
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
