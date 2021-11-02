import DatatableIntetrface , {Header , Totals} from './datatableInterface'
import HttpClient from '../axios/http'
import { currency } from '@/utils/helpers'
import Form from '../form/Form'
export default class Datatable extends HttpClient{ 
    title: string
    description: string
    headers: Header[]
    url:string
    hasFooter:boolean
    data:any[] = []
    search:string=""
    loading:boolean = true
    filters?:Form
    error:boolean = false
    payload:Object
    totals:Totals[] = []
    public constructor(details:DatatableIntetrface){
        super()
        this.title = details.title
        this.headers = details.headers
        this.description = details.description
        this.url = details.url
        this.payload = details.payload
        this.hasFooter = details.hasFooter
        if(details.filters) this.filters = details.filters

        this.getData()
    }

    public setHasFooter(val:boolean){
        this.hasFooter = val
    }
    public getData() {
        return new Promise((resolve , reject) => {
            this.loading = true
            let url = this.url
            if(typeof this.filters !='undefined' ) url += `?${this.serializeQuery(this.filters.form)}`
            this.instance.get<any[]>(url)
            .then((res) =>  {
                if(res == null){
                    this.data  = []
                    this._reset()
                    return 
                }
                const data =  res as unknown as any[]
                if(this.hasFooter){
                    data.map((i:any) => {
                        this.headers.forEach((header:Header) => {
                            if(header.isTotal){
                                header.total += i[header.value as keyof typeof res]
                            }
                            if(header.isPrice){
                                i[header.value as keyof typeof data] = currency(i[header.value as keyof typeof res])
                            }
                        })
                        return i
                    })
                }
                this.data  = data
                this._reset()
                resolve(res)        
            }).catch(e => {
                this.loading = false
                this.error = true
                reject(e)
            })
          })
    }


    private _reset(){
        
        this.loading = false
        this.error = false
    }
}