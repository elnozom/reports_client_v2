<template>
  <div class="wrapper">
      <v-container>
        <v-row>
            <v-col cols="12">
                <v-data-table
            :headers="datatable.headers"
            :items="datatable.data"
            :loading="datatable.loading"
            class="elevation-4"
            fixed-header
            height="600px"
          >
            <template v-slot:[`item.TotalCash`]="{ item }">
              {{ $n(item.TotalCash, 'currency')}}
            </template>
           
          </v-data-table>
               <v-btn @click.prevent="getCashtray">click</v-btn>
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PosApi from '../../classes/axios/pos/PosService'
import DatatableIntetrface from '../../classes/datatable/datatableInterface'
import CashtrayDatatable from '../../datatables/pos/cashtray'
import PosApiInterface from "@/classes/axios/pos/PosInterface";
import {numberWithCommas} from "@/utils/helpers"
export default Vue.extend({
  name: "pos-cashtray",
  data(){
      const datatable = new CashtrayDatatable()
    return {
        datatable
    }
  },


  methods:{
      getCashtray(){
          const payload = {
              year : 2021,
              store : 0
          }
        //   this.datatable.getData('getCashtray' , payload)
      }
  }
});
</script>
