<template>
<v-container>
    <v-form v-model="form.valid">
        <slot name="title" />
        <v-row>
            <v-col cols="6" v-for="(input , index) in form.inputs" :key="index">
                <text-input @input="change(input)" v-if="input.type=='text'" :input="input"/>
                <select-input  @change="change(input)" v-if="input.type=='select'" :input="input"/>
                <combo-input  @change="change(input)" v-if="input.type=='combo'" :input="input"/>
                <date-input  @change="change(input)" v-if="input.type=='date'" :input="input"/>
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
import DateInput from './Date.vue'
import Vue from 'vue'
import { InputInterface } from '../interface'
export default Vue.extend({
    components:{
        SelectInput ,
        ComboInput,
        DateInput,
        TextInput
    },
    props:{
        form:Form
    },
    methods:{
        change(input:InputInterface) {
            let form =  this.form.form
            form[input.name as keyof typeof form] = input.val
            this.$emit('change' , input.val)
        }
    }
})
</script>