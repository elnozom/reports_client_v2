<template>
<v-container>
    <v-form v-model="form.valid">
        <slot name="title" />
        <v-row>
            <v-col cols="6" v-for="(input , index) in form.inputs" :key="index">
                <text-input @input="change" v-if="input.type=='text'" :input="input"/>
                <select-input @change="change" v-if="input.type=='select'" :input="input"/>
                <combo-input @change="change" v-if="input.type=='combo'" :input="input"/>
            </v-col>
        </v-row>
    </v-form>
</v-container>
</template>

<script lang="ts">
import Form from '../Form'
import SelectInput from './Select.vue'
import TextInput from './Text.vue'
import ComboInput from './Combo.vue'
import Vue from 'vue'
export default Vue.extend({
    components:{
        SelectInput ,
        ComboInput,
        TextInput
    },
    props:{
        form:Form
    },
    methods:{
        change(val:any) {
            console.log(val)
        }
    }
})
</script>