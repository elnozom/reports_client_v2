import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import cashtrayFilter from '@/utils/form/forms/cashtrayFilter';


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

const url = "cashtray"

const params:DatatableIntetrface = {
    title : "cashtray",
    headers ,
    description:"cashtray_desc",
    filters:cashtrayFilter,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable