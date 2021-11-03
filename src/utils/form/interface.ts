export type TextInputInterface = {
    name: string
    label: string
    icon: string
    cols: number
    type:string
    val?:any
    initial?:any,
    required?:boolean
    value:any
}
export type DateInputInterface = {
    name: string
    label : string
    min : string
    max : string
    required?:boolean
    val?:any
    value : string
    limit:string
    initial?:any
    type: string
}

export type SelectInputInterface = {
    name: string
    cache: boolean
    loading: boolean
    clearable?:boolean
    text: string
    val?:any
    value: string
    type:string
    initialFetch:boolean
    initial?:any,
    items?: Object[]
    icon: string
    label: string
    url?:string
    required?:boolean
    payload?:Object
}

export type InputInterface = SelectInputInterface | TextInputInterface | DateInputInterface

export interface FormInterface {
    inputs: InputInterface[]
    loading: boolean
    valid:boolean 
    submit: Function
}