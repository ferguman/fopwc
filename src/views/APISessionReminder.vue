<template>
    <v-dialog v-model="show_api_session_reminder_form" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Renew Your Session
            <v-progress-circular :rotate="-90" :size="50" :width="7" :value="session_percent_to_expiration" color="orange">
               {{ session_percent_to_expiration }}
            </v-progress-circular>
        </span>
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
import api from "../fop_api.js"

export default {
  computed: {
    show_api_session_reminder_form () {return this.$store.state.api_session.reminder_popup_on},
    session_percent_to_expiration () {return this.$store.state.api_session.percent_to_expiration}
  },
  methods: {
    continue_session: function () {
      //- console.log("TODO: Implement the continue_session function");
      api.extend_session()
      this.$store.dispatch('start_session_timer')
    },  
    logout: function () {
      this.$store.commit('logout')
    },
  }
}
</script>