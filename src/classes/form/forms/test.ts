import Form from '../Form';
import { InputInterface} from './../interface';
import {searchInput , yearInput , storeInput , groupInput} from '../inputs/InputStore'
const inputs:InputInterface[] = [
    searchInput,
    storeInput,
    groupInput,
    yearInput
]

const submit:Function = () => {
    console.log('submitted')
}

const form = new Form(inputs , submit)

export default form