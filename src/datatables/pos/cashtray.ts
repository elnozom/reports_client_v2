import { CashTray } from './../../classes/axios/pos/types';
import DatatableIntetrface from '../../classes/datatable/datatableInterface'
import Datatable  from '../../classes/datatable/datatable'
import PosService  from '../../classes/axios/pos/PosService'

// import { CashTray } from '../axios/pos/types'
export default class CashtrayDatatable extends Datatable  implements DatatableIntetrface{ 
    loading:boolean = true
    headers: Object[]
    data:CashTray[] = []

    public constructor(){
        super("cashtray")
        this.headers = [
            {value:'TotalCash', text: 'TotalCash'},
            {value:'TotalOrder', text: 'TotalOrder'},
            {value:'TVisa', text: 'TVisa'},
            {value:'TVoid', text: 'TVoid'},
            {value:'MonthNo', text: 'MonthNo'},
            {value:'AverageCash', text: 'AverageCash'},
            {value:'NoOfCashTry', text: 'NoOfCashTry'},
            {value:'AvgBasket', text: 'AvgBasket'}
        ]

        this.getData({year:2021 , store:0})
    }

    public getData(payload:Object = {}) {
        const service = new PosService()
        service.getCashtray(payload).then(res => {
            this.data = res as CashTray[]
            this.loading = false
        })
    }
    public draw() :string{
        return `asdasd`
    }
}