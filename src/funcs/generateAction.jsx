import { getActions } from './axios'
import getRandomItem from './getRandomItem'
import runRandomizer from './runRandomizer'

export default async function generateMacro(nLoops, types, callback) {
    getActions()
        .then(res => {
            let activeTypes = getActiveTypes(types)
            let newActions = ''
            for (let i = 0; i < nLoops; i++) {
                newActions += newRandomizedActionsFromTypeId(res)
            }
            return newActions
            // return activeTypes
        })
        .then(callback)
}

function newRandomizedActionsFromTypeId(actions, idArray = [0]) {
    let newMacro = ''
    idArray.forEach(idArray => {
        //adiciona um item da lista de cada tipo
        newMacro += getRandomItem(actions[idArray].list)
    })
    return runRandomizer(newMacro)
}

function getActiveTypes(types) {
    types.filter(type => type.status)
}