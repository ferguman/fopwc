
import axios from 'axios'
import { resolve, reject } from 'bluebird';
import store from './store.js'


async function fopcw_get(url) {
  try {
    const response = await axios.get(process.env.VUE_APP_API_BASE_URL + "/" + url);
    if (response.data.r == true) {
      console.log(url + ' api call successful');
      return resolve(response.data);
    }
    else {
      console.log(url + ' api called failed');
      return reject(new Error(url + ' api call rejected by server.'));
    }
  }
  catch (error) {
    console.log('error: ' + url + ' api call failed.');
    return reject(error);
  }
}

export default {
    get_chart_list: function(system_guid) {
          store.dispatch('start_session_timer')
          return axios.get(process.env.VUE_APP_API_BASE_URL + "/get_chart_list/" + system_guid)
            .then(response => {
                if (response.data.r == true) {
                  console.log('get_chart_list api call successful')
                  return resolve(response.data.chart_list)
                } else {
                  console.log('get_chart_list api called failed')
                  return reject(new Error('get_chart_list api call rejected by server.'))
                }
              })
    },
    get_devices: function () {
      return axios.get(process.env.VUE_APP_API_BASE_URL + "/get_devices")
      .then(response => {
          if (response.data.r == true) {
            console.log('get_devices api call successful')
              return resolve(response.data.devices)
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
    get_reset_code: function(user_name) {
      // TODO create a libary of sanitizers and sanitize user_name
      return fopcw_get('get_reset_code/' + user_name)
    }, 
    get_zip_file: function () {
      axios.get(process.env.VUE_APP_API_BASE_URL + "/image/get_zip")
      .then(function (response) {
          if (response.data.r == true && response.data.logged_in == true) {
            console.log('zip file sucess');
          } else {
            console.log('error: web server was not able to generate the zip file')
          }
        })
      .catch(function (error) {
        console.log(error);
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