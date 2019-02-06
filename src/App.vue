<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Farm Operations</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/ferguman/fopvue"
        target="_blank"
      >
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-layout>
         <v-navigation-drawer permanent>
            <router-link to="/">Doser</router-link><br> 
            <router-link to="/Germination">Germination</router-link><br>
            <router-link to="/pheno_form">Phenome Form</router-link>
         </v-navigation-drawer>
         <router-view></router-view>
         <!-- <PhenoForm/> -->
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
//import PhenoForm from "./components/PhenoForm";

export default {
  name: "App",
  /*
  components: {
    PhenoForm
  },
  */
  data() {
    return {
      //
    };
  }
};
</script>
