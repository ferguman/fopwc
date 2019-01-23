<template>
<v-container fluid>
  <v-layout align-start justify-center fill-height>
      <v-card>
          <v-form ref="form" v-model="valid" lazy-validation class="form">
            <v-text-field v-model="date" :rules="dateRules" label="Date" required></v-text-field>
            <v-text-field v-model="field" :rules="fieldRules" label="Field" required></v-text-field>
            <v-text-field v-model="trial" :rules="trialRules" label="Trial" required></v-text-field>
            <v-text-field v-model="plot" :rules="plotRules" label="Plot" required></v-text-field>
            <v-text-field v-model="height" label="Height" required></v-text-field>
            <v-text-field v-model="weight" label="Weight" required></v-text-field>
            <v-text-field v-model="edible_mass" label="Edible Mass" required></v-text-field>

            <v-btn :disabled="!valid" color="success" @click="Submit">Submit</v-btn>
            <v-btn color="error" @click="reset">Reset Form</v-btn>
            <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
          </v-form>
      </v-card>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    date: "",
    dateRules: [
      v => !!v || "Date is required",
    ],
    field: "",
    fieldRules: [
      v => !!v || "Field is required",
    ],
    trial: "",
    trialRules: [
      v => !!v || "Trial is required",
    ],
    plot: "",
    plotRules: [
      v => !!v || "Plot is required",
    ],
    height: "",
    weight: "",
    edible_mass: "",
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
.form {
  padding: 15px;
}
</style>
