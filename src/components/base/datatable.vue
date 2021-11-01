<template>
  <div>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field label="asdsd"/>
          </v-col>
          <v-col cols="6">
            <v-text-field label="asdsd"/>
          </v-col>
          <v-col cols="6" v-if="table.hasFooter">
            <v-btn color="primary" @click.prevent="showTotals">{{$t('show_totals')}}</v-btn>
          </v-col>
          <v-col cols="12">
          <v-data-table
            :headers="table.headers"
            :items="table.data"
            :loading="table.loading"
            dense
            :search="table.search"
            class="elevation-4"
            fixed-header
            height="600px"
          >
            <template v-slot:body v-if="table.error">
              <tr class="text-center py-4">
                <td :colspan="table.headers.length">
                  {{ $t("error_getting_data") }}
                </td>
              </tr>
            </template>
            <template slot="body.append" v-if="table.hasFooter">
              <tr class="text-center sm-hidden black--text bg-gredient">
                <th
                  class="text-center text-color"
                  v-for="(header, index) in table.headers"
                  :key="index"
                >
                  <span v-if="index == 0 && !header.total">
                    {{ $t("totals") }}
                  </span>
                  <span v-else-if="!header.isTotal"> </span>
                  <span v-else>
                    {{ currency(header.total) }}
                  </span>
                </th>
              </tr>
            </template>
          </v-data-table>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog
      v-model="dialog"
      width="400"
    >
      <v-card>
        <v-card-title class="text-h5 primary">
          {{$t('totals')}}
        </v-card-title>

        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    {{$t('key')}}
                  </th>
                  <th class="text-left">
                    {{$t('total')}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(header , index) in totalsHeaders"
                  :key="index"
                >
                  <td>{{ header.text }}</td>
                  <td>{{ currency(header.total) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-card>
    <!-- <v-btn @click.prevent="table.getData()">reload</v-btn> -->
  </div>
</template>

<script lang="ts">
import Datatable from "@/classes/datatable/datatable";
import { Header } from "@/classes/datatable/datatableInterface";
import { currency } from "@/utils/helpers";
import Vue from "vue";
export default Vue.extend({
  props: {
    table: Datatable,
  },
  data() {
    return {
      dialog : false
    }
  },
  computed:{
    totalsHeaders(){
      return this.table.headers.filter((header:Header) => {
        return header.isTotal ? header : ''
      })
    }
  },
  methods: {
    currency: (x: number) => currency(x),
    showTotals(){
      this.dialog=true
    }
  },
});
</script>