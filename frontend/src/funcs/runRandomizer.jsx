import {addRandomNumbers} from "./addRandomNumbers"
import {axios_post} from "./axios"
import axios from 'axios'
import { range } from 'lodash'

const baseUrl = 'http://localhost:3000'

export const run_randomizer = (n) => {
    axios.get(`${baseUrl}/pures`)
    .then(resp => resp.data)
    .then(data => {
        for (let i in range(n)) {
            data.map(macro => {
                const array1 = addRandomNumbers(macro.array1.split(','))
                const array2 = addRandomNumbers(macro.array2.split(','))
                const obj = {  array1, array2 }
                return axios_post(obj)
            })
        }
    })
}

