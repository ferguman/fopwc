<template>
<div>
  <v-btn to="new_device" color="primary" dark class="mb-2">New Device</v-btn>
  <v-data-table :headers="headers" :items="devices" class="elevation-1">
    <template slot="items" slot-scope="ss">
        <td>{{ss.item.name}}</td>
        <td>{{ss.item.type}}</td>
        <td class="justify-center layout px-0">
            <v-btn to="images" flat small>images</v-btn>
            <v-btn to="transplant_crop" flat small>config</v-btn>
            <v-btn to="harvest_crop" flat small>view</v-btn>
        </td>
    </template>
  </v-data-table>
</div>
</template>

<script>

// import axios from 'axios'
import fop_api from "../fop_api.js"


  export default {
    data () {
      return {
        headers: [
          {text: 'Name', align:'left', sortable: false, value:'name'},
          {text: 'Type', align:'left', sortable: false, value:'type'},
          {text: 'Commands', align:'left', sortable: false, value:'type'}],
        devices: [{}]
      }
    },
      methods:  {
        images: function () {
            this.$router.push({name:'device_images'})
        },
        transplant: function () {
            this.$router.push({name:"start_crop"})
        },
        harvest: function () {
            this.$router.push({name:"start_crop"})
        }
      },
    mounted () {
      fop_api.get_devices()
        .then(response => {
          this.devices = response })
        .catch(() => {
          this.devices = [{}]
      })
    }
  }
  </script>