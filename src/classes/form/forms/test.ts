import Form from '../Form';
import { InputInterface} from './../interface';
import {searchInput ,accountType,toDate, yearInput , storeInput , groupInput , fromDate} from '../inputs/InputStore'
const inputs:InputInterface[] = [
    searchInput,
    storeInput,
    groupInput,
    accountType,
    fromDate,
    toDate,
    yearInput
]

const submit:Function = () => {
    console.log('submitted')
}

const form = new Form(inputs , submit)

export default form