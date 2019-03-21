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
      <v-select v-model="grow_site" :items="grow_sites" 
                item-text="name" item-value="id"> </v-select>
      <v-btn flat v-if="show_logout_button" to="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
      <v-btn flat v-if="show_login_button" to="login">
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn flat href="https://github.com/ferguman/fopvue" target="_blank">
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
import PageNav from "./components/PageNav.vue"
//import axios from 'axios'

export default {
  name: "App",
  components: { PageNav },
  props: {bogus_prop: String, delete_these_props_later: String},
  data() {
    return {
      drawer: null, 
      //- show_login_button: true,
      //- show_logout_button: false
    };
  },
  computed: {
    show_login_button () { return this.$store.state.show_login_button}, 
    show_logout_button () { return !this.$store.state.show_login_button}, 
    grow_site: {
      get () {
        return this.$store.state.grow_site
      },
      set (value) {
        this.$store.commit('update_grow_site', value)
      }
    },
    grow_sites () {return this.$store.state.grow_sites}
  },
  methods: {
    update_grow_site (e) {
      this.$store.commit('update_grow_site', e.value)
    },
  Mounted: function () {

      console.log("foobar");
      this.$router.push({name: 'login'})
    }
  }
  /* Fetches posts when the component is created.
  created() {
    axios.get(`https://fop3.urbanspacefarms.com:5000/api/session`)
    .then(response => {
      // JSON responses are automatically parsed.
      if (this.auth_failure == true) {
        //route to login form`
      } else {
         this.sites = response.data.sites
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
    */
}
</script>
