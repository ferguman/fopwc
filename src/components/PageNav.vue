<template>
      <div>
        <v-list>
            <v-list-tile to="/manage_crops">
              <v-list-tile-action><v-icon>dashboard</v-icon></v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Crops</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
            <v-list-tile to="/systems">
              <v-list-tile-action> <v-icon>gavel</v-icon> </v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Systems</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
            <v-list-tile to="/config">
              <v-list-tile-action><v-icon>gavel</v-icon></v-list-tile-action>
              <v-list-tile-content> <v-list-tile-title>Config</v-list-tile-title> </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </div>
</template>