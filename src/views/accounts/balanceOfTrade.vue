<template>
  <datatable :table="data"/> 
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/accounts/blanace-of-trade/index";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "blanace-of-trade",
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
