<template>
  <v-app>
        <v-navigation-drawer app  v-model="drawer">
          <PageNav/>
        </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Farm Operations</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--
      <v-select v-model="organization" :items="organizations" 
                item-text="name" item-value="guid"> </v-select>
      -->
      <v-btn flat v-if="show_logout_button" @click="logout" to="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
      <v-btn flat v-if="is_session_alive()" to="logout">
        <span class="mr-2">Logout</span>
        <SessionTimer/>
      </v-btn>
      <v-btn flat href="https://github.com/ferguman/fopwc" target="_blank">
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
      <v-layout justify-center align-center>
      <router-view></router-view>
      </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import PhenoForm from "./components/PhenoForm";
import PageNav from "../../components/PageNav.vue"
import SessionTimer from "../../views/APISessionReminder.vue"

import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: "App",
  components: { PageNav, SessionTimer },
  props: {bogus_prop: String, delete_these_props_later: String},
  data() {
    return {
      drawer: null, 
    };
  },
  computed: {
    show_login_button () { return this.$store.state.show_login_button}, 
    show_logout_button () { return !this.$store.state.show_login_button}, 
    /*
    organization: {
      get () {
        return this.$store.state.organization
      },
      set (value) {
        this.$store.commit('set_organization', value)
      }
    },
    organizations () {return this.$store.state.organizations}
    */
  },
  methods: {
    is_session_alive() {
       if (this.$store.state.api_session.time_of_last_api_call) {
         return true
       } else {
        return false
       }
    },
    //api_session: {time_of_last_api_call
    logout: function () {

      axios.post(process.env.VUE_APP_API_BASE_URL + "/logout")
      .then(function (response) {
          if (response.data.logged_in == "unknown") {
            console.log('error logging out. server could not destroy the session');
          } else if (response.data.logged_in != false) {
            console.log('error logging out. unknown server response.'); 
          }
        })
      .catch(function (error) {
        console.log(error);
        })
      }
    },
  mounted: function () {
      console.log('Vue mounted')
      this.$router.push({name: 'login'})
    }
}
</script>
