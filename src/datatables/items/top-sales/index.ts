import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'ItemName', text: 'ItemName' , isPrice : false , isTotal:false , total:0},
  {value:'TotalQnt', text: 'TotalQnt' , isPrice : false , isTotal:false , total:0},
  {value:'TotalAmount', text: 'TotalAmount' , isPrice : true , isTotal:true , total:0},
  {value:'Profit', text: 'Profit' , isPrice : true , isTotal:true , total:0},
  {value:'Disc', text: 'Disc' , isPrice : true , isTotal:true , total:0}
]

const url = "top"

const params:DatatableIntetrface = {
    title : "top_sales",
    headers ,
    description:"top_sales_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable