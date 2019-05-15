<template>
    <v-tabs v-model="active" color="primary" dark slider-color="secondary">
        <v-tab  :key="1" ripple>charts</v-tab>
        <v-tab  :key="2" ripple>images</v-tab>
        <v-tab :key="3" ripple>download</v-tab>
        <v-tab-item :key="1">
          <p>Chart data is typically updated evey 20 mintues. Click
              <v-btn @click="refresh_charts" color="primary" dark class="mb-2">refresh</v-btn> to get the newest charts.
          </p>
            <img v-for="o of active_charts" :key="o.key" v-bind:src="o.url_with_ts" width="800"/>
            <!-- sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"/> -->
        </v-tab-item>
        <v-tab-item :key="2">
           <p>Images are typically updated every hour. Click
              <v-btn @click="refresh_image" color="primary" dark class="mb-2">refresh</v-btn> to get the newest image.
           </p>
           <img v-bind:src="image_url" alt="Latest image" style="width:720px;"/>
        </v-tab-item>
        <v-tab-item :key="3">
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="image_download_settings.images_per_day" :rules="max_images_per_day_rules" label="number of images per day" required/>
            <v-date-picker v-model="image_download_settings.start_date"></v-date-picker>
            <v-date-picker v-model="image_download_settings.end_date"></v-date-picker>
            <br>
            <!-- v-btn :download="image_download_settings.filename" v-bind:href="image_download_href" --> 
            <v-btn @click="download_zip" color="blue darken-1" flat >Download Zip File</v-btn>
          </v-form>
        </v-tab-item>
    </v-tabs>
</template>

<script>
import fop_api from "../fop_api.js"

export default {
data () {
    return {
      grow_system_guid: null,
      active: null,
      image_url: null,
      image_base_url: null,
      image_download_settings: {images_per_day: 4, start_date: null, end_date: null, 
                                zip_base_url:process.env.VUE_APP_API_BASE_URL + '/get_zip',
                                zip_url:process.env.VUE_APP_API_BASE_URL + '/get_zip',
                                filename:'foobar.zip'},
      max_images_per_day_rules: [
        v => Number.isInteger(parseInt(v)) || 'must be a postive integer between 1 and 144',
        v => (parseInt(v) >= 1 && parseInt(v) <= 144) || 'must be a postive integer between 1 and 144'
      ],
      valid: false,
      //allow for a max of 15 charts
      chart_list: [
        {key: 1, url_with_ts: null, url: null}, {key: 2, url_with_ts: null, url: null}, {key: 3, url_with_ts: null, url: null},
        {key: 4, url_with_ts: null, url: null}, {key: 5, url_with_ts: null, url: null}, {key: 6, url_with_ts: null, url: null},
        {key: 7, url_with_ts: null, url: null}, {key: 8, url_with_ts: null, url: null}, {key: 9, url_with_ts: null, url: null},
        {key: 10, url_with_ts: null, url: null}, {key: 11, url_with_ts: null, url: null}, {key: 12, url_with_ts: null, url: null},
        {key: 13, url_with_ts: null, url: null}, {key: 14, url_with_ts: null, url: null}, {key: 15, url_with_ts: null, url: null},
      ]
    }},
computed: {
  active_charts: function() {
    var active_charts = []
    for (var i=0; i<this.chart_list.length; i++) {
       if (this.chart_list[i].url_with_ts) {
         active_charts[i] = this.chart_list[i]
       }
    } 
    return active_charts
  },
  image_download_href: function() {
    // put a unique URL parameter onto the url to avoid browser caching.
     return this.image_download_settings.zip_url + '?ts=' + new Date().getTime() 
  }
},
methods: {
  download_zip: function () {
    if (this.$refs.form.validate()) {
      var parms = this.image_download_settings.images_per_day + '/' + 
                  this.image_download_settings.start_date + '/' +
                  this.image_download_settings.end_date
      console.log('start date: ' + this.image_download_settings.start_date)
      var url = this.image_download_settings.zip_url + '/' + parms + '?ts=' + new Date().getTime()
      console.log('url: ' + url)
      window.open(url, "_blank") 
    }
    //fop_api.get_zip_file(this.image_download_settings)
  },
  refresh_charts: function() {
    console.log("refresh charts invoked")
    for (var i=0; i<this.chart_list.length; i++) {
       if (this.chart_list[i].url_with_ts) {
          this.chart_list[i].url_with_ts = this.chart_list[i].url + "?ts=" + new Date().getTime()
          // for debug -> console.log("new url with ts: " + this.chart_list[i].url_with_ts)
       }
    }
  },
  refresh_image: function() {
    console.log('refresh image invoked')
    this.image_url = this.image_base_url + '?ts=' + new Date().getTime()

  },
  get_chart_info: function() {
      console.log('getting charts')
  }
},
mounted: function () {
      this.grow_system_guid = this.$route.params.grow_system_guid
      this.image_base_url = process.env.VUE_APP_API_BASE_URL + '/image/' + this.grow_system_guid 
      this.image_url = this.image_base_url + '?ts=' + new Date().getTime()
      console.log('grow_system_uuid: ' + this.grow_system_guid)
      fop_api.get_chart_list(this.grow_system_guid).then(response => {
          var i
          for (i=0; i < response.length; i++) {
            this.chart_list[i].url_with_ts = process.env.VUE_APP_API_BASE_URL + response[i].rel_url + "?ts=" + new Date().getTime()
            this.chart_list[i].url = process.env.VUE_APP_API_BASE_URL + response[i].rel_url
            // for debug -> console.log('prepare chart image url_with_ts: ' + this.chart_list[i].url_with_ts)
          }
          console.log("chart count: " + response.length)
      })
        .catch(() => {
          this.chart_list = []
      })
    }
}
</script>
