
import axios from 'axios'
import { resolve, reject } from 'bluebird';

export default {
    get_devices: function () {

      return axios.get(process.env.VUE_APP_API_BASE_URL + "/get_devices")
      .then(response => {
          if (response.data.r == true) {
            console.log('get_devices api call successful')
              return resolve(response.data.devices)
              /*
              return resolve([
                {name: 'fc1', type:"fc1"},
                {name: 'SLSC MVP', type:"mvp"},
                {name: 'fc3', type:"fc2"},
                {name: 'light drive', type:"fopd"}])
              */
          } else {
            console.log('get_devices api called failed')
            return reject(new Error('get_devices api call rejected by server.'))
          }
        })
      .catch(function (error) {
        console.log('error: get_devices api call failed.')
        return reject(error)
        })
        
    },
    logout: function () {
      axios.post(process.env.VUE_APP_API_BASE_URL + "/logout")
      .then(function (response) {
          if (response.data.logged_in == "unknown") {
            console.log('error logging out. server could not destroy the session');
          } else if (response.data.logged_in != false) {
            console.log('error logging out. unknown server response.'); 
          } else {
            console.log('successful logout')
          }
        })
      .catch(function (error) {
        console.log(error);
        })
    },
    extend_session: function () {
      axios.get(process.env.VUE_APP_API_BASE_URL + "/extend_session")
      .then(function (response) {
          if (response.data.r == true && response.data.logged_in == true) {
            console.log('web server api session extended');
          } else {
            console.log('error: web server was not able to extend the session')
          }
        })
      .catch(function (error) {
        console.log(error);
        })
    },
}