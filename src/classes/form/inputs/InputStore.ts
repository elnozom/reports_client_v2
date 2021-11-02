import { currentYear } from '@/utils/helpers';
import { lastTenYearsArr, accountTypes, currentDate } from './../../../utils/helpers';
import { TextInputInterface , DateInputInterface , SelectInputInterface } from '../interface';

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
    cache : true,
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


export const accountType:SelectInputInterface =  {
    name:"account_type",
    cache : true,
    loading : false,
    text : 'key',
    value : 'value',
    initialFetch:false,
    type : 'select',
    items :accountTypes,
    icon : 'mdi-safe-square-outline',
    label : 'account_type'
}

export const fromDate:DateInputInterface =  {
    name:"from_date",
    label : "from_date",
    min : "",
    max : currentDate,
    type:'date',
    value : "",
}


export const toDate:DateInputInterface =  {
    name:"to_date",
    label : "to_date",
    min : "",
    max : currentDate,
    type:'date',
    value : "",
}



