import DatatableIntetrface from '@/classes/datatable/datatableInterface'
import Datatable  from '../../classes/datatable/datatable'


const headers = [
    {value:'TotalCash', text: 'TotalCash'},
    {value:'TotalOrder', text: 'TotalOrder'},
    {value:'TVisa', text: 'TVisa'},
    {value:'TVoid', text: 'TVoid'},
    {value:'MonthNo', text: 'MonthNo'},
    {value:'AverageCash', text: 'AverageCash'},
    {value:'NoOfCashTry', text: 'NoOfCashTry'},
    {value:'AvgBasket', text: 'AvgBasket'}
]
const payload = {
  year : "2021",
  store : 0
}
const url = "cashtry"
const params:DatatableIntetrface = {
    title : "cashtray",
    headers ,
    url,
    payload
}
const datatable = new Datatable(params)
export default datatable