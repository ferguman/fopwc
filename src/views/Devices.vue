<template>
<div>
  <v-btn to="new_device" color="primary" dark class="mb-2">New Device</v-btn>
  <v-data-table :headers="headers" :items="devices" class="elevation-1">
    <template slot="items" slot-scope="ss">
        <td>{{ss.item.name}}</td>
        <td>{{ss.item.type}}</td>
        <td class="justify-center layout px-0">
            <v-btn to="transplant_crop" flat small>config</v-btn>
            <v-btn to="harvest_crop" flat small>view</v-btn>
        </td>
    </template>
  </v-data-table>
</div>
</template>

<script>
  export default {
      data () {
          return {
              headers: [
                  {text: 'Name', align:'left', sortable: false, value:'name'},
                  {text: 'Type', align:'left', sortable: false, value:'type'},
              ],
              devices : [
                  {name: 'fc1', type:"fc1"},
                  {name: 'SLSC MVP', type:"mvp"},
                  {name: 'fc3', type:"fc2"},
                  {name: 'light drive', type:"fopd"},
              ]
          }
      },
      methods:  {
          transplant: function () {
              this.$router.push({name:"start_crop"})
          },
          harvest: function () {
              this.$router.push({name:"start_crop"})
          }
      }
  }
  </script>