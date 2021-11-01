import { currentYear } from '@/utils/helpers';
import { Header } from '@/classes/datatable/datatableInterface';
import DatatableIntetrface from '@/classes/datatable/datatableInterface'
import Datatable  from '@/classes/datatable/datatable'


const headers:Header[] = [
  {value:'MonthNo', text: 'MonthNo' , isPrice : false , isTotal:false , total:0},
  {value:'TotalOrder', text: 'TotalOrder' , isPrice : false , isTotal:false , total:0},
  {value:'NoOfCashTry', text: 'NoOfCashTry' , isPrice : false , isTotal:false , total:0},
  {value:'TotalCash', text: 'TotalCash' , isPrice : true , isTotal:true , total:0},
  {value:'TVisa', text: 'TVisa' , isPrice : true , isTotal:true , total:0},
  {value:'TVoid', text: 'TVoid' , isPrice : true , isTotal:true , total:0},
  {value:'AverageCash', text: 'AverageCash' , isPrice : true , isTotal:true , total:0},
  {value:'AvgBasket', text: 'AvgBasket' , isPrice : true , isTotal:true , total:0},
]

const payload = {
  year : "2021",
  store : 0
}
const url = "cashtray"

const params:DatatableIntetrface = {
    title : "cashtray",
    headers ,
    url,
    hasFooter:true,
    payload
}
const datatable = new Datatable(params)
export default datatable