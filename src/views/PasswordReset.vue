<template>
<v-form ref="password_reset_form" v-model="valid">
    <v-dialog v-model="show_password_reset_form" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">First: Get a Reset Code</span>
        Enter your User Name and then press the GET RESET CODE button.  A Reset Code will be sent via text message.
        Enter the Reset Code and your New Password and then click the RESET PASSWORD button.
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="user_name" :rules="user_name_rules" label="User Name" required autocapitalize="off"/>
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
        <v-text-field v-model="reset_code" :rules="reset_code_rules" label="Reset Code"/>
        <v-text-field v-model="new_password_1" :rules="password_1_rules" label="New Password" type="password"/>
        <v-text-field v-model="new_password_2" :rules="password_2_rules" label="Enter New Password Again" type="password"/>
        <div>{{password_reset_message}}</div>
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

import fop_api from "../fop_api.js"

export default {
  data: () => ({
    valid: false,
    show_password_reset_form: true,
    user_name: '',
    new_password_1: '',
    new_password_2: '',
    password_reset_message: '',
    reset_code: '',
    user_name_rules: [
      v => !!v || 'name is required',
      v => v.length >= 4 || 'name must be at least 4 characters long'
    ],
    current_reset_code_rules: [],
    current_password_1_rules: [],
    current_password_2_rules: [],
    reset_code_rules: [
      v => !!v || 'reset code is required',
      v => v.length == 6 || 'reset code must be 6 digits'
    ],
    password_1_rules: [
      v => !!v || 'you must supply a new password'
    ],
  }),
  computed: {
    password_2_rules () {
      return [
        v => this.new_password_1 == v || 'The two passwords must match'
      ]
    }
  },
  methods: {
    cancel: function () {
        this.$router.push({name: 'login'});
    },
    get_reset_code: function () {
      this.current_reset_code_rules = [] 
      this.current_password_1_rules = []
      this.current_password_2_rules = []
      if (this.$refs.password_reset_form.validate()) {
        fop_api.get_reset_code(this.user_name)
        .then(response => {
          this.password_reset_message = 'asdf'})
        .catch(() => {
          this.password_reset_message = 'an error has occured. '})
      }
    },
    reset_password: function () {

      this.current_reset_code_rules = this.reset_code_rules 
      this.current_password_1_rules = this.password_1_rules
      this.current_password_2_rules = this.password_2_rules

      if (this.$refs.password_reset_form.validate()) {
        fop_api.reset_password({user_name: this.user_name, reset_code: this.reset_code})
        .then(response => {
          //#TODO need to disect response and print the message returned from the server.
          this.message = 'your password has been reset' + response.data })
        .catch(() => {
          this.message = 'an error has occured'})

        console.log('TODO: implement new password method')
      }
    }
  }
}

</script>