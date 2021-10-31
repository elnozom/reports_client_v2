import DatatableIntetrface from './datatableInterface'
import PosService  from '../axios/pos/PosService'
export default class Datatable{ 
    title: string
    public constructor(title:string){
        this.title = title
    }

    // :headers="DriverTotalsDatatable.headers"
    //                 :items="DriverTotalsDatatable.data"
    //                 :search="DriverTotalsDatatable.search"



    public draw() :string{
        return `asdasd`
    }
}