import { InputInterface } from '@/utils/form/interface';
import { currentYear } from '@/utils/helpers';
import { lastTenYearsArr, accountTypes, currentDate } from './../../../utils/helpers';
import { TextInputInterface , SwitchInputInterface , DateInputInterface , SelectInputInterface } from '../interface';

export const searchInput:TextInputInterface =  {
    name : 'search',
    label : 'search',
    type: 'text',
    icon : 'mdi-magnify',
    cols : 6,
    value : '',
}
export const yearInput:SelectInputInterface =  {
    name:"year",
    cache : true,
    loading : false,
    text : '',
    initialFetch:false,
    value : '',
    initial:currentYear,
    type : 'select',
    items :lastTenYearsArr(),
    icon : 'mdi-clipboard-text-clock-outline',
    label : 'year'
}

export const storeInput:SelectInputInterface =  {
    name:"store",
    cache : false,
    loading : false,
    text : 'store_name',
    initialFetch:true,
    clearable:true,
    value : 'store_code',
    type : 'select',
    url:'cashtray/stores',
    icon : 'mdi-store-settings-outline',
    label : 'store'
}
export const groupInput:SelectInputInterface =  {
    name:"group",
    cache : true,
    loading : false,
    text : 'GroupName',
    value : 'GroupCode',
    initialFetch:true,
    clearable:true,
    type : 'combo',
    items :[],
    url:'groups',
    icon : 'mdi-format-list-group',
    label : 'group'
}


export const driversInput:SelectInputInterface =  {
    name:"EmpCode",
    cache : true,
    loading : false,
    text : 'EmpName',
    value : 'EmpCode',
    initialFetch:true,
    type : 'combo',
    items :[],
    url:'get-drivers',
    icon : 'mdi-motorbike',
    label : 'drivers'
}
export const payCheqInput:SwitchInputInterface =  {
    name:"PayCheq",
    label : "PayCheq",
    cols : 6,
    type : 'switch',
    val : false
}

export const accountInput:SelectInputInterface =  {
    name:"AccSerial",
    cache : false,
    loading : false,
    text : 'AccountName',
    value : 'Serial',
    initialFetch:true,
    type : 'combo',
    items :[],
    url:'get-account',
    icon : 'mdi-account-outline',
    label : 'account'
}

let supplier = {...accountInput}
supplier.url += '?type=2'
supplier.label = 'supplier'

export const supplierInput = supplier


export const accountType:SelectInputInterface =  {
    name:"accType",
    cache : true,
    loading : false,
    text : 'key',
    value : 'value',
    initialFetch:false,
    type : 'select',
    items :accountTypes,
    icon : 'mdi-account-cog-outline',
    label : 'account_type'
}

export const fromDate:DateInputInterface =  {
    name:"fromDate",
    label : "from_date",
    limit:'date',
    min : "",
    max : currentDate,
    type:'date',
    value : "",
}

export const monthDate:DateInputInterface =  {
    name:"date",
    label : "date",
    min : "",
    max : currentDate,
    type:'date',
    limit:'month',
    value : "",
}



export const toDate:DateInputInterface =  {
    name:"toDate",
    label : "to_date",
    min : "",
    limit:'date',
    max : currentDate,
    type:'date',
    value : "",
}








export const convertToRequred = (input:InputInterface) => {
    const req = {...input}
    req.required = true
    return req
}