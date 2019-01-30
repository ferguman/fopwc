<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MVP</span>
        <span class="font-weight-light">PHENOTYPE FORM</span>
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
      <PhenoForm/>
    </v-content>
  </v-app>
</template>

<script>
import PhenoForm from "./components/PhenoForm";

export default {
  name: "App",
  components: {
    PhenoForm
  },
  data() {
    return {
      //
    };
  }
};
</script>
