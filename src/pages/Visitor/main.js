import Vue from 'vue'
// - import '/plugins/vuetify'
import App from './App.vue'
// - import router from '/router'
// - import store from '/store'
import '../../registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


