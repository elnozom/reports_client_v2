import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'EmpCode', text: 'EmpCode' , isPrice : false , isTotal:false , total:0},
  {value:'EmpName', text: 'EmpName' , isPrice : false , isTotal:false , total:0},
  {value:'Orders', text: 'Orders' , isPrice : false , isTotal:false , total:0},
  {value:'ROrders', text: 'ROrders' , isPrice : false , isTotal:false , total:0},
  {value:'Amount', text: 'Amount' , isPrice : true , isTotal:true , total:0},
  {value:'RAmount', text: 'RAmount' , isPrice : true , isTotal:true , total:0},
]


const url = "get-emp-totals"

const params:DatatableIntetrface = {
    title : "driver_totals",
    headers ,
    description:"driver_totals_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable