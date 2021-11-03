import Form from '../../../utils/form/Form';
import { InputInterface} from '../../../utils/form/interface';
import { monthDate , storeInput} from '../../../utils/form/inputs/InputStore'
const inputs:InputInterface[] = [
    monthDate,
    storeInput,
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter