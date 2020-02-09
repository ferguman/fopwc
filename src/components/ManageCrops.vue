<template>
<div>
  <v-btn to="start_crop" color="primary" dark class="mb-2">Start Crop</v-btn>
  <v-data-table :headers="headers" :items="crops" class="elevation-1">
    <template slot="items" slot-scope="ss">
        <td>{{ss.item.batch_id}}</td>
        <td>{{ss.item.start_date}}</td>
        <td class="text-xs-right">{{ss.item.status}}</td>
        <td class="text-xs-right">{{ss.item.name}}</td>
        <td class="text-xs-right">{{ss.item.variety}}</td>
        <td class="justify-center layout px-0">
            <v-btn to="transplant_crop" flat small>transplant</v-btn>
            <v-btn to="harvest_crop" flat small>harvest</v-btn>
        </td>
    </template>
  </v-data-table>
</div>
</template>

<script>
//- import axios from 'axios'
//- axios.defaults.withCredentials = true;
import fop_api from '../fop_api.js'

export default {
      data () {
          return {
              load_from_server: true,
              headers: [
                  {text: 'Batch', align:'left', sortable: false, value:'batch_id'},
                  {text: 'Start Date', align:'left', sortable: false, value:'start_date'},
                  {text: 'Status', align:'left', sortable: false, value:'status'},
                  {text: 'Name', align:'left', sortable: false, value:'plant_type'},
                  {text: 'Actions', sortable: false, value:'actions'}
              ],
              crops: [{}]
              /*
                  {batch_id: 10010, start_date:"2/1/2019", status:"germination", plant_type:"Basil"},
                  {batch_id: 10013, start_date:"1/2/2019", status:"1st transplant", plant_type:"Basil"}
              ]
              */
          }
      },
      /*
      computed: {
          crops: function () {
              if (this.load_from_server) {
                 //fetch the list of crops from the server.
                 const res = this.$store.state.axios.get(process.env.VUE_APP_API_BASE_URL + '/get_crops') 
                 console.log(res)
                 return [{}] 
              } else {
                return this.crops_cache
              }
          }
      },
      */
      methods:  {
          transplant: function () {
              this.$router.push({name:"start_crop"})
          },
          harvest: function () {
              this.$router.push({name:"start_crop"})
          }
      },
      mounted () {
        fop_api.get_crops()
          .then(response => {
            this.crops = response.crops})
          .catch(() => {
            this.crops = [{}]})
    }
  }
  </script>