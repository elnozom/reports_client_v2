import Form from '../../../utils/form/Form';
import { InputInterface} from '../../../utils/form/interface';
import { fromDateRequired , toDateRequired , accountInput} from '../../../utils/form/inputs/InputStore'
// clone the object 
const safes = {...accountInput}
safes.icon = 'mdi-safe-square-outline'

// attach type to  url to catch only safes
safes.url += '?type=5' 
const inputs:InputInterface[] = [
    fromDateRequired,
    toDateRequired,
    safes
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter