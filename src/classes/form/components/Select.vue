<template>
  <v-select
    @change="$emit('change' , val)"
    :cache-items="input.cache"
    :item-text="input.text"
    :item-value="input.value"
    :value="input.initial || null"
    :items="input.items"
    :loading="input.loading"
    :prepend-icon="input.icon"
    hide-details
    :label="$t(input.label)"
    single-line
  ></v-select>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    input: Object,
  },
});
</script>