<template>
  <datatable :table="data"/>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/pos/driver-totals";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "pos-cashtray",
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
