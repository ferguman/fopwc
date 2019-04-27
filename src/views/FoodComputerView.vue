<template>
  <div class="about">
    <v-tabs v-model="active" color="primary" dark slider-color="secondary">
        <v-tab  :key=1 ripple>charts</v-tab>
        <v-tab  :key=2 ripple>images</v-tab>
        <v-tab-item :key=1>
          <p>Chart data is typically updated evey 20 mintues. Click
              <v-btn @click="update_charts" color="primary" dark class="mb-2">update</v-btn> to refresh the charts.
          </p>
          <v-img :src="air_temperature"></v-img>
        </v-tab-item>
        <v-tab-item :key=2>
           images and more
        </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>

export default {
data () {
    return {
      grow_system_guid: null,
      active: null,
      //air_temperature: process.env.VUE_APP_API_BASE_URL + "/chart/air_temperature?" + new Date().getTime(),
      air_temperature: null,
      //chart_list: [{type:'air_temperature', url:"/api/chart/air_temperature"}]
    }},
methods: {
  update_charts: function() {
    /*
    (% for chart in chart_list: %)
       this.((chart['vue_name'])) = "/chart/((chart['vue_name']))?" + new Date().getTime();
    (% endfor %)
    */
  },
  get_chart_info: function() {
      console.log('getting charts')
  }
},
created () {
    this.grow_system_guid = this.$route.params.grow_system_guid
    this.air_temperature = process.env.VUE_APP_API_BASE_URL + "/chart/air_temperature/" + 
                           this.grow_system_guid + "?" + new Date().getTime(),
    this.get_chart_info()
},
/*
watch: {
    '$route' : 'this.get_charts'
}
*/
}
</script>
