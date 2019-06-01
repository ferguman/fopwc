<template>
<v-form ref="password_reset_form" v-model="valid">
    <v-dialog v-model="show_password_reset_form" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">First: Get a Reset Code</span>
        Enter your username and then press the Get Reset Code button.  A reset code will be sent via text message.
        Enter the reset code and your new password and then click the reset button.
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="username" :rules="name_rules" label="User Name" required autocapitalize="off"/>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click="get_reset_code">Get Reset Code</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <span class="headline">Then: Reset Your Password</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="reset_code" label="Reset Code"/>
        <v-text-field v-model="new_password_1" label="New Password"/>
        <v-text-field v-model="new_password_2" label="Enter New Password Again"/>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click="reset_password">Reset Password</v-btn>
        <v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</v-form>
</template>

<script>

export default {
  data: () => ({
    valid: false,
    show_password_reset_form: true,
    username: '',
    new_password_1: '',
    new_password_2: '',
    reset_code: '',
    name_rules: [
      v => !!v || 'name is required',
      v => v.length >= 4 || 'name must be at least 4 characters long'
    ]
  }),
  methods: {
    cancel: function () {
        this.$router.push({name: 'login'});
    },
    get_reset_code: function () {
        console.log('TODO: Implement the get_reset_code method')
        //TODO: Get a Twilio account
    },
    reset_password: function () {
        console.log('TODO: implement new password method')
    }
  }
}

</script>