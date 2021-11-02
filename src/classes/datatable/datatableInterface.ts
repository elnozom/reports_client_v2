import Form from "../form/Form";

export interface Header {
    value:string
    text:string
    isPrice:boolean
    isTotal:boolean
    total:number
}
export interface Totals {
    key:string
    value:number
}

export default interface DatatableIntetrface {
    title: string
    url:string
    description:string
    headers: Header[]
    payload:Object
    filters?:Form
    hasFooter:boolean
}