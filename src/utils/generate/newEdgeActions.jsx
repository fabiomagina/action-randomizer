
function generateEdgesAction(types, actionsOrderArray, fullCycle, position, loopIndex) {
    let newMacro = ''
    if (fullCycle) {
        types.forEach(action => {
            if (action[position]) {
                let newaction = action.list[actionsOrderArray[loopIndex]]
                newMacro += `${newaction} \n`
                console.log(actionsOrderArray)
            }
        })
    }
    return newMacro
}

export function generateCycleFirstAction(types, actionsOrderArray, fullCycle, i) {
    return generateEdgesAction(types, actionsOrderArray, fullCycle, 'start', i)
}

export function generateCycleLastAction(types, actionsOrderArray, fullCycle, i) {
    return generateEdgesAction(types, actionsOrderArray, fullCycle, 'end', i)
}