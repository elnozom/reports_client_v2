import Form from '../../../utils/form/Form';
import { convertToRequred , fromDate, toDate, storeInput, groupInput, supplierInput } from '../../../utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';
const inputs: Input[] = [
   new Input(convertToRequred(fromDate)),
   new Input(convertToRequred(toDate)),
   new Input(storeInput),
   new Input(supplierInput),
   new Input(groupInput)
]

const submit: Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs, submit)

export default cashtrayFilter