<template>
  <app-form :form="TestForm"/>
</template>

<script lang="ts">
import AppForm from '@/classes/form/components/Form.vue'
import TestForm from "@/classes/form/forms/test";
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  data(){
    return{
      TestForm
    }
  },
  components:{
    AppForm
  }
});
</script>
