import Form from '../../../utils/form/Form';
import { InputInterface} from '../../../utils/form/interface';
import { fromDateRequired , toDateRequired , accountType} from '../../../utils/form/inputs/InputStore'

const inputs:InputInterface[] = [
    fromDateRequired,
    toDateRequired,
    accountType
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter