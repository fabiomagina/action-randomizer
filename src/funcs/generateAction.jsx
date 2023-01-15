import { getActions } from './axios'
import getRandomItem from './getRandomItem'
import runRandomizer from './runRandomizer'

export default async function generateMacro(callback) {
    getActions()
        .then(res => selectActionsFromIdArray(res))
        .then(callback)
}

function selectActionsFromIdArray(actions, idArray = [0]) {
    let newMacro = ''
    idArray.forEach(idArray => {
        
        newMacro += getRandomItem(actions[idArray].list)
    })
    return runRandomizer(newMacro)
}