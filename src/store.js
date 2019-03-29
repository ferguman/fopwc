import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
axios.defaults.withCredentials = true;

export default new Vuex.Store({
  state: {
      axios: axios,
      organization: {},
      organizations: [{}],
      show_login_button: true,
  },
  mutations: {
    set_login_session_data(state, session_data) {
      state.organizations =  session_data
      if (state.organizations.length > 0) {
        state.organization = state.organizations[0]
      }
    },
    set_organization (state, organization) {
      state.organiation = organization 
    },
    set_login_status (state, logged_in) {
      if (logged_in) {
        state.show_login_button = false 
      } else {
        state.show_login_button = true
      }
    }
  },
  actions: {

  }
})
