<template>
<v-form ref="form" v-model="valid" lazy-validation class="form">

    <div>You are transplanting batch: {{batch_id}}</div>

    <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="transplant_date"
            lazy transition="scale-transition" offset-y full-width min-width="290px" >
    <v-text-field slot="activator" v-model="transplant_date" label="Transplant Date" readonly :rules="dateRules"></v-text-field>
    <v-date-picker v-model="transplant_date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
    </v-menu>

    <v-text-field label="Transplant Total"></v-text-field>

    <v-select v-model="grow_tray" :items="grow_trays" item-text="tag"
              item-value="id" label="Grow Tray" return-object></v-select>

    <v-textarea value="transplant_notes" label="Notes" hint="Transplant Notes"></v-textarea>

    <div class='buttonContainer'>
        <v-btn color="error" @click="reset" class="reset">Reset Form</v-btn>
        <v-btn color="success" @click="submit" class="submit">Submit</v-btn>
    </div>
</v-form>
</template>

<script>
  export default {
    data: function () {
      return {
        valid: true,
        batch_id: 10012,
        transplant_date: "",
        dateRules: [v => !!v || "Date is required"],
        grow_tray: 0,
        grow_trays: [{id:1, tag:"G0001"}, {id:2, tag:"G0002"}],
        transplant_notes: "put your notes here",
        substrate: 1,
        substrates: ['rockwool', 'cocao coir']
      }
    },
    methods: {
        reset () {
            this.$refs.form.reset()
        },
        submit () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
                console.log({start_date:this.date, tray:this.germ_tray.id, plant:this.plant_type})
            }
        }
    },
    created: function () {
        //This is where you would fetch the data needed to populate the form. See the
        //exmample code below.
        // Alias the component instance as `vm`, so that we  
        // can access it inside the promise function
        var vm = this
        vm.germ_trays = [{tag:'p_0001', id:1}, {tag:'p_0002', id:2}]
        // Fetch our array of posts from an API
        //fetch('https://jsonplaceholder.typicode.com/posts')
        //  .then(function (response) {
        //    return response.json()
        //  })
        //  .then(function (data) {
        //    vm.posts = data
        //  })
    }
  }
</script>