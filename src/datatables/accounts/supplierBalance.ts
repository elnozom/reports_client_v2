import DatatableIntetrface , { Header }  from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
const headers:Header[] = [
    {value:'AccountCode', text: 'AccountCode' , isPrice : false , isTotal:false , total:0},
    {value:'AccountName', text: 'AccountName' , isPrice : false , isTotal:false , total:0},
    {value:'DBT', text: 'DBT' , isPrice : true , isTotal:true , total:0},
    {value:'CRDT', text: 'CRDT' , isPrice : true , isTotal:true , total:0},
    {value:'ReturnBuy', text: 'ReturnBuy' , isPrice : true , isTotal:true , total:0},
    {value:'Buy', text: 'Buy' , isPrice : true , isTotal:true , total:0},
    {value:'Paid', text: 'Paid' , isPrice : true , isTotal:true , total:0},
    {value:'CHEQUE', text: 'CHEQUE' , isPrice : true , isTotal:true , total:0},
    {value:'CHQUnderCollec', text: 'CHQUnderCollec' , isPrice : true , isTotal:true , total:0},
    {value:'Discount', text: 'Discount' , isPrice : true , isTotal:true , total:0}
]
const url = "supplier-balance"
const params:DatatableIntetrface = {
  title : "supplier_balance",
  description:"supplier_balance_desc",
  headers ,
  url,
  hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable