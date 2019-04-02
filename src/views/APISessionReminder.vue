<template>
    <v-dialog v-model="show_api_session_reminder_form" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Renew Your Session</span>
      </v-card-title>
      <v-card-text>
        <div>Your session is about to expire.  Click on the Continue Session button to continue with your session.</div>
      </v-card-text>
      <v-card-actions>
        <v-btn colar="blue darken-1" flat @click="continue_session">Continue Session</v-btn>
        <v-btn colar="blue darken-1" flat @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
  data: () => ({
      show_api_session_reminder_form: true,
  }),
  methods: {
    continue_session: function () {
      console.log("TODO: Implement the continue_session function");
      this.show_api_session_reminder_form = false
    },  
    logout: function () {
      console.log('TODO: Implement the logout function')
      this.show_api_session_reminder_form = false
      this.$store.commit('logout')
    },
  }
}
</script>