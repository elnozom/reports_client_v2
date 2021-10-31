<template>
  <div class="wrapper">
      <v-container>
        <v-row>
            <v-col cols="12">
               <datatable :table="cashtray"/>
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import cashtray from "@/datatables/accounts/supplierBalance";
import datatable from "@/components/base/datatable.vue";
export default Vue.extend({
  name: "pos-cashtray",
  components:{
    datatable
  },
  data(){
    return {
        cashtray
    }
  },
});
</script>
