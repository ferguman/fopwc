import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      grow_site: {id: 1, name: "greencubator"},
      grow_sites: [
        {id: 1, name: "greencubator"}, 
        {id: 2, name: "maplewood"},
        {id: 3, name: "home"}],
      show_login_button: true,
  },
  mutations: {
    update_grow_site (state, grow_site) {
      state.grow_site = grow_site
    },
    show_login_button (state) {
      state.show_login_button = true
    },
    remove_login_button (state) {
      state.show_login_button = false 
    }
  },
  actions: {

  }
})
