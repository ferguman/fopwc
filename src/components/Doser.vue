
<template>
   <div>
        <div class="text-xs-center">Current Ph: {{ph}} alarm --- box</div>
        <div class="text-xs-center"><h2>Dosing</h2></div>

        <v-switch :label="`Auto Dose`" color="success" v-model="auto_dose"></v-switch>

        <v-text-field label="pH Set Point" :step="0.1" v-model="ph_set_point" type="number" ></v-text-field>

          <v-text-field v-model="ph_range[0]" label="min" :step="0.1" 
                              type="number" ></v-text-field>
          <v-range-slider v-model="ph_range" :max="7.0" :min="5.0" :step="0.1"> </v-range-slider>
          <v-text-field v-model="ph_range[1]" label="max" :step="0.1" type="number" ></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => ({
    ph: 6.5,
    auto_dose: true, 
    items: [
      { title: 'pH' },
      { title: 'Nutrients'},
      { title: 'Reservoir'}],
      ph_range:[6.0, 6.5], 
      ph_set_point: 6.2,
  }),
  methods: {
    show_ph: function() {
      this.ph += 1;
    }
  }
}
</script>

