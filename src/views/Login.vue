<template>
    <v-dialog v-model="show_login_form" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="user_name" label="User Name" required/>
        <v-text-field v-model="password" label="Password*" type="password" required/>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
        <v-btn colar="blue darken-1" flat @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
      user_name: "",
      password: "",
      show_login_form: true 
  }),
methods: {
 login: function () {
     //TODO: need to make this a configuration item.  URLS will be different on production
     axios.post("https:fop3.urbanspacefarms.com:5000/api/login", 
                { user_name: this.user_name, password: 'thi.password'})
     this.dialog = false;
     this.$store.commit('remove_login_button');
     this.$router.push({name: "manage_crops"})
/*
   const { username, password } = this
   this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
     this.$router.push('/')
   })
   */
   }
}}
</script>