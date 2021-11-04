import Form from '@/utils/form/Form';
import { convertToRequred, fromDate, accountType, accountInput, toDate } from '@/utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';


const type = {...accountType}
const acc = {...accountInput}
const accInput = new Input(acc)
type.change = (val:any) => {
    acc.url = `get-account?type=${val}`
    accInput.getInputItems()
    
}
const inputs: Input[] = [
  new Input(convertToRequred(fromDate)),
    new Input(convertToRequred(toDate)),
    new Input(type),
    new Input(convertToRequred(acc)),
]


const submit: Function = () => {
    console.log('submitted')
}
const cashtrayFilter = new Form(inputs, submit)
export default cashtrayFilter