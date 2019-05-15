<template>
<v-form ref="form" v-model="valid">
  <v-select :items="system_types" label="System Type" outline ></v-select>
  <v-text-field v-model="name" :rules="name_rules" label="System Name" required/>
</v-form>
</template>

<script>

export default {
data () {
    return {
        system_types: ['food computer', 'doser'],
        valid: false
    }
}}
</script>