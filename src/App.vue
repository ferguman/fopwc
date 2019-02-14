<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Farm Operations</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/ferguman/fopvue" target="_blank">
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-layout>
      <PageNav/> 
      <router-view></router-view>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
//import PhenoForm from "./components/PhenoForm";
import PageNav from "./components/PageNav.vue"

export default {
  name: "App",
  components: { PageNav },
  props: {bogus_prop: String, delete_these_props_later: String},
  data() {
    return {
      //
    };
  }
};
</script>
