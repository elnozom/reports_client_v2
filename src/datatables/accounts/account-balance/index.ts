import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';

const headers:Header[] = [
  {value:'DocNo', text: 'DocNo' , isPrice : false , isTotal:false , total:0},
  {value:'DocDate', text: 'DocDate' , isPrice : false , isTotal:false , total:0},
  {value:'Dbt', text: 'Dbt' , isPrice : true , isTotal:true , total:0},
  {value:'Crdt', text: 'Crdt' , isPrice : true , isTotal:true , total:0},
  {value:'RaseedCrdt', text: 'RaseedCrdt' , isPrice : true , isTotal:true , total:0},
  {value:'RaseedDbt', text: 'RaseedDbt' , isPrice : true , isTotal:true , total:0}
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