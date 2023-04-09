import newRandPosRandomizedAction from "./newRandPosRandomizedAction"

function generateActionsFromActiveTypes(actionsArray, activeTypesIds) {
    let newActions = ''
    actionsArray.forEach(action => {
        if (activeTypesIds.includes(action.id)) {
            newActions += newRandPosRandomizedAction(action)
        }
    })
    return newActions
}

export default generateActionsFromActiveTypes