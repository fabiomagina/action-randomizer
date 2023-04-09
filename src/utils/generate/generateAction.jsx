import generateActionsFromActiveTypes from "./newActionFromActiveTypes"
import { generateCycleFirstAction, generateCycleLastAction } from "./newEdgeActions"
import getTypesIds from "./generateUtils/getTypesIds"
import getRandOrderToFixedActions from "./generateUtils/getRandOrderToFixedActions"

async function generateAction(nLoops, types, callback, fullCycle, fixedType) {
    let actionsOrderArray = getRandOrderToFixedActions(2)
    let activeTypesIds = getTypesIds(types, fixedType)
    let newMacro = ''
    for (let i = 0; i < nLoops; i++) {
        newMacro += generateCycleFirstAction(types, actionsOrderArray, fullCycle, i)
        newMacro += generateActionsFromActiveTypes(types, activeTypesIds)
        newMacro += generateCycleLastAction(types, actionsOrderArray, fullCycle, i)
    }
    callback(newMacro)
}

export default generateAction

