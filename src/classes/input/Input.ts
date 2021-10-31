import InputInterface from './inpuInterface'

class Input implements InputInterface{
    name: string
    label: string
    icon: string = ""
    cols: number = 12 // default 

    constructor(details: InputInterface){
        this.name = details.name
        this.label = details.label
        this.icon = details.icon
        this.cols = details.cols
    }



    public draw() :string{
        return `asdasd`
    }
}