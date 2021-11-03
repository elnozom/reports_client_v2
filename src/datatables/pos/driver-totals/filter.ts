import Form from '@/utils/form/Form';
import { InputInterface} from '@/utils/form/interface';
import { driversInput , fromDate , toDate} from '@/utils/form/inputs/InputStore'
const fromD = {...fromDate}
const toD = {...toDate}
fromD.required = true
toD.required = true
const inputs:InputInterface[] = [
    fromD,
    toD,
    driversInput
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter