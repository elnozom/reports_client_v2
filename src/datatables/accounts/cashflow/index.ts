import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'DocDate', text: 'DocDate' , isPrice : false , isTotal:false , total:0},
  {value:'Supplier', text: 'Supplier' , isPrice : false , isTotal:false , total:0},
  {value:'Income', text: 'Income' , isPrice : true , isTotal:true , total:0},
  {value:'Expensis', text: 'Expensis' , isPrice : true , isTotal:true , total:0},
  {value:'Others', text: 'Others' , isPrice : true , isTotal:true , total:0},
  {value:'Bankin', text: 'Bankin' , isPrice : true , isTotal:true , total:0},
  {value:'Cheqin', text: 'Cheqin' , isPrice : true , isTotal:true , total:0},
  {value:'Cheqout', text: 'Cheqout' , isPrice : true , isTotal:true , total:0},
]
const url = "cash-flow"
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