import Form from '../../../utils/form/Form';
import { InputInterface } from '../../../utils/form/interface';
import { fromDate, toDate, storeInput, groupInput, supplierInput } from '../../../utils/form/inputs/InputStore'
const inputs: InputInterface[] = [
    fromDate, toDate, storeInput, groupInput, supplierInput
]

const submit: Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs, submit)

export default cashtrayFilter