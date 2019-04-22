import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
axios.defaults.withCredentials = true;
//import Router from './router';

let SESSION_UPDATE_INTERVAL = 5 * 1000;      // 10 seconds
let SESSION_WARNING_INTERVAL = 10 * 1000;    // 10 seconds
let SESSION_REMINDER_PERIOD = 20 * 1000       // 20 seconds

export default new Vuex.Store({
  state: {
      axios: axios,
      organization: {},
      organizations: [{}],
      api_session: {time_of_last_api_call: null, session_timer: null, reminder_popup_on: false, percent_to_expiration:0},
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
    set_api_session_timer (state, timer) {
      state.api_session.time_of_last_api_call = new Date
      if (state.api_session.session_timer) {
        console.log('destroying existing stored api session timer')
        clearInterval(state.api_session.session_timer)
        state.api_session.session_timer = null
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
    },
    set_percent_to_expiration(state, value) {
      state.api_session.percent_to_expiration = value
    },
    display_session_reminder_popup(state, value) {
      state.api_session.reminder_popup_on = value
    },
    update_session_state(state){
      //get the relevant timestamps
      let now_ts = (new Date()).getTime()
      let last_api_call_ts =  state.api_session.time_of_last_api_call.getTime()
      if (state.api_session.reminder_popup_on) { 
        state.api_session.percent_to_expiration = Math.round(100 * ((now_ts - SESSION_WARNING_INTERVAL - last_api_call_ts)/SESSION_REMINDER_PERIOD))
        // TODO
      } else {
        if ((new Date()).getTime() - state.api_session.time_of_last_api_call.getTime() >= SESSION_WARNING_INTERVAL) {
          state.api_session.reminder_popup_on = true 
        } else {
          //Do nothing - the user has hit the API (thus keeping the server session alive) within the warning
          //             interval window of time.
        }
      }
    }
  },
  actions: {
    start_session_timer ({commit}) {
      console.log('creating a new api session timer')
      commit('set_api_session_timer', setInterval(function () {commit('update_session_state')}, SESSION_UPDATE_INTERVAL))
    }
  }
}) 