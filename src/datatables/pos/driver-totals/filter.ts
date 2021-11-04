import Form from '@/utils/form/Form';
import { driversInput , fromDate, convertToRequred, toDate} from '@/utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';

const inputs:Input[] = [
   new Input(convertToRequred(fromDate)),
    new Input(convertToRequred(toDate)),
    new Input(driversInput)
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter