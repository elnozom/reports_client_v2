import DatatableIntetrface , {Header , Totals} from './datatableInterface'
import HttpClient from '../axios/http'
import { currency } from '@/utils/helpers'
export default class Datatable extends HttpClient{ 
    title: string
    headers: Header[]
    url:string
    hasFooter:boolean
    data:any[] = []
    search:string=""
    loading:boolean = true
    filters?:Object
    error:boolean = false
    payload:Object
    totals:Totals[] = []
    public constructor(details:DatatableIntetrface){
        super()
        this.title = details.title
        this.headers = details.headers
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
            this.instance.get<any[]>(`${this.url}?${this.serializeQuery(this.payload)}`)
            .then((res) =>  {
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
                this.data = data
                this.loading = false
                this.error = false
                resolve(res)        
            }).catch(e => {
                this.loading = false
                this.error = true
                reject(e)
            })
          })
    }
}