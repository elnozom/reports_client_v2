import Form from '@/utils/form/Form';
import {convertToRequred ,fromDate , toDate ,payCheqInput, accountType} from '@/utils/form/inputs/InputStore'
import Input from '@/utils/form/inputs/Input';

const inputs:Input[] = [
    new Input(convertToRequred(fromDate)),
    new Input(convertToRequred(toDate)),
    new Input(payCheqInput),
    new Input(accountType)
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter