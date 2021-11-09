import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'ItemCode', text: 'ItemCode' , isPrice : false , isTotal:false , total:0},
  {value:'ItemName', text: 'ItemName' , isPrice : false , isTotal:false , total:0},
  {value:'Raseed', text: 'Raseed' , isPrice : false , isTotal:false , total:0}
]

const url = "stock"

const params:DatatableIntetrface = {
    title : "stock",
    headers ,
    description:"stock_desc",
    filters,
    searchable:true,
    url,
    hasFooter:false,
}
const datatable = new Datatable(params)
export default datatable