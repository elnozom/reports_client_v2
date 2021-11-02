import HttpClient from '../axios/http';
import { FormInterface, InputInterface, SelectInputInterface } from './interface';
export default class Form   extends HttpClient implements FormInterface {
    inputs: InputInterface[]
    loading:boolean = false
    public form:Object = {} as any
    valid:boolean = false
    submit:Function
    constructor(inputs: InputInterface[] , submit:Function){
        super()
        this.inputs = inputs
        this.submit = submit
        this._initInputs(inputs)
    }
    private _initInputs(inputs:InputInterface[]){
        let form = {} as any
        inputs.forEach((input:InputInterface) => {
            form[input.name] = input.initial || ''
            if(input.type == 'select' || input.type == 'combo') {
                const select = input as SelectInputInterface
                if (select.initialFetch) this._getInputItems(select)
            }
        })
        this.form = form
    }

    private _getInputItems(input:SelectInputInterface){
        let url =  `${input.url}`
        if(typeof input.payload != 'undefined') url += `?${this.serializeQuery(input.payload)}`
        return new Promise((resolve , reject) => {
            this.loading = true
            this.instance.get<any[]>(url)
            .then(res => {
                input.items = res as unknown as any[]
            })
        })
    }   
    // private getItems(input:Object) {
    //     return new Promise((resolve , reject) => {
    //         this.loading = true
    //         this.instance.get<any[]>(`${input.url}?${this.serializeQuery(input.payload)}`)
    //         .then((res) =>  {
    //             const data =  res as unknown as any[]
    //             this.data = data
    //             this.loading = false
    //             this.error = false
    //             resolve(res)        
    //         }).catch(e => {
    //             this.loading = false
    //             this.error = true
    //             reject(e)
    //         })
    //       })
    // }
    // public draw(){
    //     this.inputs.forEach((input:TextInputInteerface) => {
    //         const i = new InputBuilder(input , 'text')

            
    //     })
    // }
}