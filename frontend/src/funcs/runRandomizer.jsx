import { addRandomNumbers } from "./addRandomNumbers"
import { axios_post } from "./axios"
import axios from 'axios'
import { range } from 'lodash'

const baseUrl = 'http://localhost:3000'

function addRandom(array) {
    let novo_array = []
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            const c = (Math.floor(Math.random() * 5) - 2)
            let n = +array[i] + c
            novo_array.push(`${n}`)
        } else {
            novo_array.push('0')
        }
    }
    return novo_array
}


function newAction(old) {
    let action = ''
    let old_action = old.split('\n')
    for (let i in old_action) {
        let line = old_action[i]
        let old_numbers = line.match(/(\d+)/g)
        let new_numbers = addRandom(old_numbers)
        old_numbers.map((n, i) => {
            if (n != 0) {
                line = line.replace(n, new_numbers[i])
            }
            else return 0
        })
        action += line + '\n'

    }
    return action
}


export const runRandomizer = (n, type) => {
    axios.get(`${baseUrl}/pures/1`)
        .then(res => res.data)
        .then(actions => {
            for (let i in range(n)) {
                let action_randomized = newAction(actions.list[0])
                axios_post({action: action_randomized})
            }
        })
}

