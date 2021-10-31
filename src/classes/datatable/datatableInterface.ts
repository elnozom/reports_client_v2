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
    headers: Header[]
    payload:Object
}