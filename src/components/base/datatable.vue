<template>
  <div>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field label="asdsd"/>
          </v-col>
          <v-col cols="12">
          <v-data-table
            :headers="table.headers"
            :items="table.data"
            :loading="table.loading"
            :search="table.search"
            class="elevation-4"
            fixed-header
            height="600px"
          >
            <template v-slot:[`item.TotalCash`]="{ item }">
              {{ currency(item.TotalCash) }}
            </template>
            <template v-slot:body v-if="table.error">
              <tr class="text-center py-4">
                <td :colspan="table.headers.length">
                  {{ $t("error_getting_data") }}
                </td>
              </tr>
            </template>
            <!-- <template slot="body.append">
              <tr class="text-center sm-hidden black--text">
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
            </template> -->
          </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- <v-btn @click.prevent="table.getData()">reload</v-btn> -->
  </div>
</template>

<script lang="ts">
import Datatable from "@/classes/datatable/datatable";
import { currency } from "@/utils/helpers";
import Vue from "vue";
export default Vue.extend({
  props: {
    table: Datatable,
  },
  methods: {
    currency: (x: number) => currency(x),
  },
});
</script>