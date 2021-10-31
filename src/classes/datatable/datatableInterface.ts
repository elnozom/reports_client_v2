import PosService  from '../axios/pos/PosService'


export default interface DatatableIntetrface {
    title: string
    loading:boolean
    headers: Object[]
    data:any[]
}