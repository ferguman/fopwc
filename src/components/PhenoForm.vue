<template>
  <v-container fluid>
    <v-layout align-start justify-center fill-height>
      <v-card class="card">
        <v-form ref="form" v-model="valid" lazy-validation class="form">
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field slot="activator" v-model="date" label="Date" readonly :rules="dateRules"></v-text-field>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field v-model="field" :rules="fieldRules" label="Field" required></v-text-field>
          <v-text-field v-model="trial" :rules="trialRules" label="Trial" required></v-text-field>
          <v-text-field v-model="plot" :rules="plotRules" label="Plot" required></v-text-field>
          <v-text-field v-model="height" label="Height"></v-text-field>
          <v-text-field v-model="weight" label="Weight"></v-text-field>
          <v-text-field v-model="edible_mass" label="Edible Mass"></v-text-field>

          <div class='buttonContainer'>
            <v-btn color="error" @click="reset" class="reset">Reset Form</v-btn>
            <v-btn color="success" @click="submit" class="submit">Submit</v-btn>
          </div>
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
    dateRules: [v => !!v || "Date is required"],
    field: "",
    fieldRules: [v => !!v || "Field is required"],
    trial: "",
    trialRules: [v => !!v || "Trial is required"],
    plot: "",
    plotRules: [v => !!v || "Plot is required"],
    height: "",
    weight: "",
    edible_mass: ""
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
    submit() {
      if (this.$refs.form.validate()) {
        // If form is valid.
        // List of optional inputs.
        let inputs = [
          {
            name: "height",
            value: this.height
          },
          {
            name: "weight",
            value: this.weight
          },
          {
            name: "edible_mass",
            value: this.edible_mass
          }
        ];

        // For each optional input we create one "entry" to send to the server.
        //
        // For example, if the user inputs the required fields (Date, Field, Trial, Plot)
        // Then inputs two optional fields (Height, Weight) we want two database entries
        // one for Height and one for Weight.
        //
        // Here we filter the inputs array. If "x" has a "value" then we know information
        // was given for that optional field in the form, therefor we need to make an
        // entry for it.
        let entries = inputs
          .filter(x => x.value)
          .map(input => {
            return {
              _id: "something",
              _rev: "something",
              status: {
                status: "Complete",
                status_qualifier: "Success"
              },
              participant: {
                type: "person",
                name: "TODO"
              },
              field: this.field,
              location: {
                field: this.field,
                plot: this.plot,
                trial: this.trial
              },
              activity_type: "Phenotype_Observation",
              start_date: {
                timestamp: this.date
              },
              subject: {
                attribute: {
                  units: "TODO",
                  name: input.name,
                  value: input.value
                },
                name: "Plant"
              }
            };
          });

        // Send each entry to the server to be logged in the database.
        for (let i = 0; i < entries.length; i++) {
          console.log(entries[i]);
        }
      }
    }
  }
};
</script>

<style>
.form {
  padding: 15px;
}
.card {
  width: 500px;
}
.buttonContainer {
  display: flex;
  flex: 1;
  flex-direction: 'row';
}
.submit {
  flex-grow: 4;
}
.reset {
  flex-grow: 1;
}
</style>
