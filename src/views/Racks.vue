<template>
<v-expansion-panel>
    <v-expansion-panel-content :key=1 :class="{'blue': 1 === 1}">
        <div slot="header" >Blue Rack</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
  </v-expansion-panel-content>
    <v-expansion-panel-content :key=2 :class="{'red': 2 === 2}">
        <div slot="header" >Red Rack</div>
        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
  </v-expansion-panel-content>
  <v-expansion-panel-content :key=3 :class="{'green': 3 === 3}">
        <div slot="header" >Green Rack</div>
        <RackControl/>
  </v-expansion-panel-content>
</v-expansion-panel>
</template>

<script>
import RackControl from "../components/RackControl.vue"
export default {
  name: "Racks", 
  components: {RackControl}
}
</script>