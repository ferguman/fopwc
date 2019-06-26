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

import fop_api from "../fop_api.js"

export default {
  data: () => ({
    valid: false,
    show_password_reset_form: true,
    user_name: '',
    new_password_1: '',
    new_password_2: '',
    reset_code: '',
    user_name_rules: [
      v => !!v || 'name is required',
      v => v.length >= 4 || 'name must be at least 4 characters long'
    ]
  }),
  methods: {
    cancel: function () {
        this.$router.push({name: 'login'});
    },
    get_reset_code: function () {
      if (this.$refs.password_reset_form.validate()) {
        console.log('TODO: Implement the get_reset_code method 1');
        fop_api.get_reset_code(this.user_name)
        .then(response => {
          this.message = 'a reset code has been sent' + response.data })
        .catch(() => {
          this.message = 'an error has occured. '})
      }
    },
    reset_password: function () {
        console.log('TODO: implement new password method')
    }
  }
}

</script>