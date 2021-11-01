export type TextInputInterface = {
    name: string
    label: string
    icon: string
    cols: number
    type:string
    required?:boolean
    value:any
}

export type SelectInputInterface = {
    cache: boolean
    loading: boolean
    text: string
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

export type InputInterface = SelectInputInterface | TextInputInterface

export interface FormInterface {
    inputs: InputInterface[]
    loading: boolean
    valid:boolean 
    submit: Function
}