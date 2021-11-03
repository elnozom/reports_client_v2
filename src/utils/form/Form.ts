import { serializeQuery } from './../helpers';
import { FormInterface, InputInterface, SelectInputInterface } from './interface';
import Api from '../axios/Api';

const Http = Api.getInstance();
export default class Form  implements FormInterface {
    inputs: InputInterface[]
    loading:boolean = false
    public form:Object = {} as any
    valid:boolean = false
    submit:Function
    constructor(inputs: InputInterface[] , submit:Function){
        this.inputs = inputs
        this.submit = submit
        this._initInputs(inputs)
    }

    // this function responsible for creating object of all inputs with key value to use it in submit or whatever
    // and if the input is select or combobox and needs to get the items from the server we get this from here too
    private _initInputs(inputs:InputInterface[]){
        let form = {} as any
        inputs.forEach((input:InputInterface) => {
            form[input.name] = input.initial || ''
            if(input.type == 'select' || input.type == 'combo') {
                const select = input as SelectInputInterface
                // initialFetch is simple flag to indicate that this input needs to load its data from the server
                if (select.initialFetch) this._getInputItems(select)
            }
        })
        this.form = form
    }


    // this function loads the data from the server to set select or combo items
    private _getInputItems(input:SelectInputInterface){
        let url =  `${input.url}`
        if(typeof input.payload != 'undefined') url += `?${serializeQuery(input.payload)}`
        return new Promise(() => {
            this.loading = true
            Http.get<any[]>(url)
            .then(res => {
                input.items = res as unknown as any[]
            })
        })
    }   
}