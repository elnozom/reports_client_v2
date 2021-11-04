<template>
  <datatable :table="data"/> 
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/accounts/supplier-balance";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "supplier-balance",
  components:{
    datatable
  },
  data(){
    return {
        data
    }
  },
});
</script>

