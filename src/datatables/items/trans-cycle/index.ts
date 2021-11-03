import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'ItemName', text: 'ItemName' , isPrice : true , isTotal:true , total:0},
  {value:'ItemCode', text: 'ItemCode' , isPrice : false , isTotal:false , total:0},
  {value:'GroupCode', text: 'GroupCode' , isPrice : false , isTotal:false , total:0},
  {value:'ByWeight', text: 'ByWeight' , isPrice : false , isTotal:false , total:0},
  {value:'LastBuyDate', text: 'LastBuyDate' , isPrice : false , isTotal:false , total:0},
  {value:'LastSellDate', text: 'LastSellDate' , isPrice : false , isTotal:false , total:0},
  {value:'MinorPerMajor', text: 'MinorPerMajor' , isPrice : false , isTotal:false , total:0},
  {value:'BuyWhole', text: 'BuyWhole' , isPrice : false , isTotal:false , total:0},
  {value:'AccountSerial', text: 'AccountSerial' , isPrice : false , isTotal:false , total:0},
  {value:'BuyPart', text: 'BuyPart' , isPrice : false , isTotal:false , total:0},
  {value:'SaleWhole', text: 'SaleWhole' , isPrice : false , isTotal:false , total:0},
  {value:'SalePart', text: 'SalePart' , isPrice : false , isTotal:false , total:0},
  {value:'TransOutWhole', text: 'TransOutWhole' , isPrice : false , isTotal:false , total:0},
  {value:'TransOutPart', text: 'TransOutPart' , isPrice : false , isTotal:false , total:0},
  {value:'TransInWhole', text: 'TransInWhole' , isPrice : false , isTotal:false , total:0},
  {value:'TransInPart', text: 'TransInPart' , isPrice : false , isTotal:false , total:0},
  {value:'IndusInWhole', text: 'IndusInWhole' , isPrice : false , isTotal:false , total:0},
  {value:'IndusInPart', text: 'IndusInPart' , isPrice : false , isTotal:false , total:0},
  {value:'IndusOutWhole', text: 'IndusOutWhole' , isPrice : false , isTotal:false , total:0},
  {value:'IndusOutPart', text: 'IndusOutPart' , isPrice : false , isTotal:false , total:0},
  {value:'RaseedbeforePart', text: 'RaseedbeforePart' , isPrice : false , isTotal:false , total:0},
  {value:'RaseedbeforeWhole', text: 'RaseedbeforeWhole' , isPrice : false , isTotal:false , total:0},
  {value:'RaseedPart', text: 'RaseedPart' , isPrice : false , isTotal:false , total:0},
  {value:'RaseedWhole', text: 'RaseedWhole' , isPrice : false , isTotal:false , total:0},
  {value:'CycleRate', text: 'CycleRate' , isPrice : false , isTotal:false , total:0},
]
const url = "trans-cycle-acc"

const params:DatatableIntetrface = {
    title : "trans_cycle_acc",
    headers ,
    description:"trans_cycle_acc_desc",
    filters,
    url,
    hasFooter:true,
}
const datatable = new Datatable(params)
export default datatable