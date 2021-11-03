import Form from '../Form';
import { InputInterface} from './../interface';
import { yearInput , storeInput} from '../inputs/InputStore'
const inputs:InputInterface[] = [
    storeInput,
    yearInput
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter