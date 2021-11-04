import Form from '../../../utils/form/Form';
import { InputInterface} from '../../../utils/form/interface';
import { convertToRequred , fromDate , toDate , accountInput} from '../../../utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';
// clone the object 
const safes = {...accountInput}
safes.icon = 'mdi-safe-square-outline'

// attach type to  url to catch only safes
safes.url += '?type=5' 
const inputs:Input[] = [
    new Input(convertToRequred(fromDate)),
    new Input(convertToRequred(toDate)),
    new Input(safes)
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter