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
      <v-btn flat v-if="is_session_alive()" @click="logout">
        <span class="mr-2">Logout</span>
        <SessionReminder/>
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
import SessionReminder from "../../views/APISessionReminder.vue"
import axios from 'axios'
axios.defaults.withCredentials = true;

export default {
  name: "App",
  components: { PageNav, SessionReminder},
  props: {bogus_prop: String, delete_these_props_later: String},
  data() {
    return {
      drawer: null, 
    };
  },
  computed: {
    show_login_button () { return this.$store.state.show_login_button}, 
    show_logout_button () { return !this.$store.state.show_login_button}, 
  },
  methods: {
    is_session_alive() {
       if (this.$store.state.api_session.time_of_last_api_call) {
         return true
       } else {
        return false
       }
    },
    logout: function () {
      this.$store.commit('logout')
    },
  },
  mounted: function () {
      console.log('Vue mounted')
      this.$router.push({name: 'login'})
    }
}
</script>
