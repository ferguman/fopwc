<template>
    <v-dialog v-model="show_login_form">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="username" label="User Name" required/>
        <v-text-field v-model="password" label="Password*" type="password" required/>
        <div>{{message}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn colar="blue darken-1" flat @click="login">Login</v-btn>
        <v-btn colar="blue darken-1" flat @click="forgot_credentials">reset my password</v-btn>
        <v-btn color="blue darken-1" flat @click="goto_visitor_site">Visitor</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>

export default {
  data: () => ({
      username: "",
      password: "",
      show_login_form: true,
      message: ""
  }),
methods: {
    forgot_credentials: function () {
        console.log("TODO: Implement the forgot_credentials function");
        this.message = '';
    },  
    goto_visitor_site: function () {
        window.location.href = "/visitor.html";
    },
    login: async function () {
      this.message = ''; 
      const res = await this.$store.state.axios.post(process.env.VUE_APP_API_BASE_URL + '/login', 
                                   {username: this.username, password: this.password},
                                   {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
      if (res.data.logged_in) {
        //const res = axios.get(process.env.VUE_APP_API_BASE_URL + '/get_crops') 
        this.dialog = false;
        this.$store.dispatch('start_session_timer')
        this.$store.commit('set_login_session_data', res.data.organizations)
        this.$router.push({name: "manage_crops"})
     } else {
       this.message = 'The server rejected your credentials. Please double check your username and password.'
     }
   }
}}
</script>