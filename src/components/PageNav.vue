<template>
      <div>
        <v-list>
            <v-list-tile to="/manage_crops">
              <v-list-tile-action><v-icon>dashboard</v-icon></v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Crops</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
            <v-list-tile to="/devices">
              <v-list-tile-action> <v-icon>gavel</v-icon> </v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Devices</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <!-- v-list>
            <v-list-tile to="/start_crop">
              <v-list-tile-action><v-icon>dashboard</v-icon></v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Start Crop</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list -->
        <v-list>
            <v-list-tile to="/pheno_form">
              <v-list-tile-action><v-icon>gavel</v-icon></v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Experiments</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
            <v-list-tile to="/pheno_form">
              <v-list-tile-action><v-icon>gavel</v-icon></v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Dashboard</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </div>
</template>