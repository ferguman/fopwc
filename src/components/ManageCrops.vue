<template>
<div>
  <v-btn to="start_crop" color="primary" dark class="mb-2">Start Crop</v-btn>
  <v-data-table :headers="headers" :items="crops" class="elevation-1">
    <template slot="items" slot-scope="ss">
        <td>{{ss.item.batch_id}}</td>
        <td>{{ss.item.start_date}}</td>
        <td class="text-xs-right">{{ss.item.status}}</td>
        <td class="text-xs-right">{{ss.item.plant_type}}</td>
        <td class="justify-center layout px-0">
            <v-btn to="transplant_crop" flat small>transplant</v-btn>
            <v-btn to="harvest_crop" flat small>harvest</v-btn>
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
                  {text: 'Batch', align:'left', sortable: false, value:'batch_id'},
                  {text: 'Start Date', align:'left', sortable: false, value:'start_date'},
                  {text: 'Status', align:'left', sortable: false, value:'status'},
                  {text: 'Plant', align:'left', sortable: false, value:'plant_type'},
                  {text: 'Actions', sortable: false, value:'actions'}
              ],
              crops: [
                  {batch_id: 10010, start_date:"2/1/2019", status:"germination", plant_type:"Basil"},
                  {batch_id: 10013, start_date:"1/2/2019", status:"1st transplant", plant_type:"Basil"}
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