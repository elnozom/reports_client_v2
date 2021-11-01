<template>
    <v-text-field
      :label="$t(input.label)"
      :prepend-icon="input.icon"
      @input="$emit('input' , val)"
    ></v-text-field>
</template>



<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    input: Object,
  },
});
</script>