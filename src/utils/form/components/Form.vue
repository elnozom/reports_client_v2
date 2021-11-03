<template>
<v-container>
    <v-form>
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
        validate():boolean{
            if(this.form.hasValidation == false){
                return true
            }
            for (let index = 0; index < this.form.inputs.length; index++) {
                const input = this.form.inputs[index];
                if(input.required == true && ( input.val == null || typeof input.val == 'undefined')){
                    return false
                }
                
            }
            return true
        },
        // this method will be code when any input in the form changed
        change(input:InputInterface) {
            this.form.valid = false
            this.form.valid = true
            let form =  this.form.state
            form[input.name as keyof typeof form] = input.val
            if(this.validate()){
                this.$emit('change' , input.val)
            }
        }
    }
})
</script>