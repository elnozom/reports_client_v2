import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
const headers:Header[] = [
  {value:'EmpCode', text: 'EmpCode' , isPrice : false , isTotal:false , total:0},
  {value:'StoreName', text: 'StoreName' , isPrice : false , isTotal:false , total:0},
  {value:'OpenDate', text: 'OpenDate' , isPrice : false , isTotal:false , total:0},
  {value:'CompouterName', text: 'CompouterName' , isPrice : false , isTotal:false , total:0},
  {value:'TotalOrder', text: 'TotalOrder' , isPrice : false , isTotal:false , total:0},
  {value:'StartCash', text: 'StartCash' , isPrice : true , isTotal:true , total:0},
  {value:'TotalCash', text: 'TotalCash' , isPrice : true , isTotal:true , total:0},
  {value:'TotalVisa', text: 'TotalVisa' , isPrice : true , isTotal:true , total:0},
]

const url = "cashtray/open"

const params:DatatableIntetrface = {
    title : "open_cashtray",
    headers ,
    description:"ope_cashtray_desc",
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable