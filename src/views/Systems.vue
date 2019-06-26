<template>
<div>
  <v-btn to="new_system" color="primary" dark class="mb-2">New System</v-btn>
  <v-data-table :headers="headers" :items="devices" class="elevation-1">
    <template slot="items" slot-scope="ss">
        <td>{{ss.item.name}}</td>
        <td>{{ss.item.type}}</td>
        <td>{{ss.item.type}}</td>
        <td class="justify-center layout px-0">
            <v-btn @click="config" flat small>config</v-btn>
            <v-btn @click="view(ss.item)" flat small>view</v-btn>
        </td>
    </template>
  </v-data-table>
</div>
</template>

<script>
import fop_api from "../fop_api.js"

export default {
  data () {
    return {
      headers: [
        {text: 'Name', align:'left', sortable: false, value:'name'},
        {text: 'Type', align:'left', sortable: false, value:'type'},
        {text: 'Access Type', align:'left', sortable: false, value:'type'},
        {text: 'Commands', align:'left', sortable: false, value:'type'}],
      devices: [{}]
    }
  },
  methods:  {
      config: function () {
        this.$router.push({name:"start_crop"})
      },
      view: function (device) {
        if (device.type == 'food computer') {
           this.$router.push({name:"food_computer_view", params:{grow_system_guid:device.grow_system_guid}})
        } else {
          console.log('cannot view unknown device type: ' + device.type)
        }
      }
    },
  mounted () {
      fop_api.get_devices()
        .then(response => {
          this.devices = response })
        .catch(() => {
          this.devices = [{}]})
    }
  }
  </script>