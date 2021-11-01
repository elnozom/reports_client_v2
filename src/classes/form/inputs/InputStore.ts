import { currentYear } from '@/utils/helpers';
import { lastTenYearsArr } from './../../../utils/helpers';
import { TextInputInterface , SelectInputInterface } from '../interface';

export const searchInput:TextInputInterface =  {
    name : 'search',
    label : 'search',
    type: 'text',
    icon : 'mdi-magnify',
    cols : 6,
    value : '',
}
export const yearInput:SelectInputInterface =  {
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
    cache : true,
    loading : false,
    text : 'store_name',
    initialFetch:true,
    value : 'store_code',
    type : 'select',
    url:'cashtray/stores',
    icon : 'mdi-store-settings-outline',
    label : 'store'
}
export const groupInput:SelectInputInterface =  {
    cache : true,
    loading : false,
    text : 'GroupName',
    value : 'GroupCode',
    initialFetch:true,
    type : 'combo',
    items :[],
    url:'groups',
    icon : '',
    label : 'group'
}
