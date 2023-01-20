import { getActions } from './axios'
import getRandomItem from './getRandomItem'
import runRandomizer from './runRandomizer'

export default async function generateMacro(nLoops, types, callback, reload) {
    let activeTypesIds = getActiveTypesIds(types)
    getActions()
        .then(actionsArray => {
            let newMacro = ''
            for (let i = 0; i < nLoops; i++) {
                newMacro += generateActionsFromActiveTypes(actionsArray, activeTypesIds)
            }
            return newMacro
        })
        .then(callback)
        .then(() => reload(true))
}

function generateActionsFromActiveTypes(actionsArray, activeTypesIds) {
    let newActions = ''
    newActions += newRandomizedActionsFromTypeId(actionsArray, activeTypesIds)

    return newActions
}

function newRandomizedActionsFromTypeId(actionsArray, activeIds) {

    let newMacro = ''
    actionsArray.forEach(actionType => {
        if (activeIds.includes(actionType.id)) {
            console.log(actionType.id)
            newMacro += runRandomizer(getRandomItem(actionType.list))
        }
    })
    console.log(newMacro)
    return newMacro
}

function getActiveTypesIds(types) {
    let activeTypes = types.filter(type => type.status)
    let activeTypesId = activeTypes.map(type => type.id)
    return activeTypesId
}