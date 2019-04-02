import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
axios.defaults.withCredentials = true;
import Router from './router';

export default new Vuex.Store({
  state: {
      axios: axios,
      organization: {},
      organizations: [{}],
      api_session: {time_of_last_api_call: null, session_timer: null, reminder_popup_on: false},
      show_login_button: true,
  },
  mutations: {
    logout (state) {
      //TODO: Need to send logout command to API - bring in logout function from App.vue and centralize it here.
      console.log('logout mutation called')
      state.api_session.time_of_last_api_call = null
      if (state.api_session.session_timer) {
        console.log('destroying existing stored api session timer')
        clearInterval(state.api_session.session_timer)
      }
      state.api_session.session_timer = null
      state.reminder_popup_on = false
      //TODO: Need to call a method to destroy all the session data so snoopers can get at it
    }, 
    session_nanny (state) {
        console.log('api session timer fired')
        if (state.api_session.reminder_popup_on) {
          console.log('reminder pop is already shown so do nothing')
        } else {
          state.api_session.reminder_popup_on = true
          console.log('show the reminder popup')
          Router.push({name: "api_session_reminder"})
        }
    },
    set_api_session_timer (state, timer) {
      state.api_session.time_of_last_api_call = new Date
      if (state.api_session.session_timer) {
        console.log('destroying existing stored api session timer')
        clearInterval(state.api_session.session_timer)
      }
      console.log('setting stored api session timer to new timer')
      state.api_session.session_timer = timer
      state.api_session.reminder_popup_on = false
    },
    set_login_session_data(state, session_data) {
      state.api_session.time_of_last_api_call = new Date
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
    start_session_timer ({commit}) {
      console.log('creating a new api session timer')
      //TODO: Need to create a global variable to set the session timeout.
      commit('set_api_session_timer', setInterval(() => {commit('session_nanny')}, 10 * 1000))
    }
  }
})
