import Form from '../../../utils/form/Form';
import { itemInput , convertToRequred , storeInput , groupInput} from '../../../utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(convertToRequred(storeInput)),
    new Input(groupInput),
    // new Input(itemInput)
    // new Input()
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter