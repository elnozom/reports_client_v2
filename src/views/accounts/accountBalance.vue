<template>
  <datatable :table="data"/> 
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/accounts/account-balance";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "account-balance",
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
