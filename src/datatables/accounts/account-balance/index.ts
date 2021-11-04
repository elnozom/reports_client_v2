import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'AccountCode', text: 'AccountCode' , isPrice : false , isTotal:false , total:0},
  {value:'AccountName', text: 'AccountName' , isPrice : false , isTotal:false , total:0},
  {value:'AccNo', text: 'AccNo' , isPrice : false , isTotal:false , total:0},
  {value:'BBC', text: 'BBC' , isPrice : true , isTotal:true , total:0},
  {value:'BBD', text: 'BBD' , isPrice : true , isTotal:true , total:0},
  {value:'BAC', text: 'BAC' , isPrice : true , isTotal:true , total:0},
  {value:'BAD', text: 'BAD' , isPrice : true , isTotal:true , total:0}
]

const url = "get-account-balance"

const params:DatatableIntetrface = {
    title : "cash_flow",
    headers ,
    description:"cash_flow_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable