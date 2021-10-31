import DatatableIntetrface , {Header , Totals} from './datatableInterface'
import HttpClient from '../axios/http'
import { currency } from '@/utils/helpers'
export default class Datatable extends HttpClient{ 
    title: string
    headers: Header[]
    url:string
    data:any[] = []
    search:string=""
    loading:boolean = true
    error:boolean = false
    payload:Object
    totals:Totals[] = []
    public constructor(details:DatatableIntetrface){
        super()
        this.title = details.title
        this.headers = details.headers
        this.url = details.url
        this.payload = details.payload
        this.getData()
    }

    public getData() {
        return new Promise((resolve , reject) => {
            this.loading = true
            this.instance.get<any[]>(`${this.url}?${this.serializeQuery(this.payload)}`)
            .then((res) =>  {
                // let prices :string[] = []
                // this.headers.forEach((header:Header) => {
                //     if(header.isPrice){
                //         prices.push(header.value)
                //     }
                //     if(header.total){
                //         let obj:Totals = {key: header.value , value : 0}
                //         this.totals.push(obj)
                //     }
                // })
                const data =  res as unknown as any[]
                data.map((i:any) => {
                    this.headers.forEach((header:Header) => {
                        if(header.isTotal){
                            header.total += i[header.value as keyof typeof res]
                        }
                        if(header.isPrice){
                            i[header.value as keyof typeof data] = currency(i[header.value as keyof typeof res])
                        }
                    })
                    
                    // this.totals.forEach((t:Totals) => {
                        
                    //     t.value += i[t.key as keyof typeof res]
                    //     // i[t as keyof typeof res] += i[t as keyof typeof res]
                    // })
                    // prices.forEach(header => {
                    //     i[header as keyof typeof res] = currency(i[header as keyof typeof res])
                    // })
                    return i
                })
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