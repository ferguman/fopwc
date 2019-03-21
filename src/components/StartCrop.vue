<template>
<v-form ref="form" v-model="valid" lazy-validation class="form">
    <v-menu ref="menu" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date"
            lazy transition="scale-transition" offset-y full-width min-width="290px" >
    <v-text-field slot="activator" v-model="date" label="Seeding Date" readonly :rules="dateRules"></v-text-field>
    <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
    </v-menu>

    <v-select v-model="germ_tray" :items="germ_trays" item-text="tag"
              item-value="id" label="Germination Tray" return-object></v-select>

    <v-select v-model="plant_type" :items="plant_types" label="Plant Type"></v-select>
    <v-select v-model="seed_packet" :items="seed_packets" label="Seed Packet"></v-select>
    <v-select v-model="substrate" :items="substrates" label="Substrate"></v-select>

    <div class='buttonContainer'>
        <v-btn color="error" @click="reset" class="reset">Reset Form</v-btn>
        <v-btn color="success" @click="submit" class="submit">Submit</v-btn>
    </div>
</v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      date: "",
      dateRules: [v => !!v || "Date is required"],
      germ_tray: 0,
      germ_trays: [],
      plant_type: 1,
      plant_types: ['Basil', 'Lettuce', 'Tomatoe'],
      seed_packet: 1,
      seed_packets: ['55', 'p_0002', 'p_0003', 'p_0004'],
      substrate: 1,
      substrates: ['rockwool', 'cocao coir']
    }),
    methods: {
        reset () {
            this.$refs.form.reset()
        },
        submit () {
            if (this.$refs.form.validate()) {
                //this.snackbar = true
                //console.log({start_date:this.date, tray:this.germ_tray.id, plant:this.plant_type})
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