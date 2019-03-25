<template>
<div>
Visitor Home Page
    <v-btn colar="blue darken-1" flat @click="login">Login</v-btn>
</div>
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
