import Form from '../../../utils/form/Form';
import { InputInterface} from '../../../utils/form/interface';
import { yearInput , storeInput} from '../../../utils/form/inputs/InputStore'
const inputs:InputInterface[] = [
    storeInput,
    yearInput
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter