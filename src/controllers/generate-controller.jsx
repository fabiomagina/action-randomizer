import getRandomItem from './functions/getRandomItem'
import runRandomizer from './functions/runRandomizer'

const fixedTypeModels =
{
    navega: [7, 15, 16],
    perfil: [0, 4, 24, 11], //$perfil_modelo, delay, rola_perfil, !escolhe_post
    follows: [4, 6, 7] //delay, follow, rolagem
}

export function handleFullCycle(fullCycle, setFullCycle) {
    setFullCycle(!fullCycle)
}

export function clear(setGeneratedActions) {
    setGeneratedActions('')
}

export function groupsFromTypes() {
    return ['', ...Object.keys(fixedTypeModels)].map((type) =>
        <option key={type} value={type}>
            {type ? type + ' ' + fixedTypeModels[type] : 'modo padrão'}
        </option>)
}

export async function generateAction(nLoops, types, callback, fullCycle, fixedType) {
    let actionsOrderArray = newRandOrderFixedActions(2)
    let activeTypesIds = getTypesIds(types, fixedType)
    let newMacro = ''
    for (let i = 0; i < nLoops; i++) {
        newMacro += runFullCycle(types, actionsOrderArray, fullCycle, 'start', i)
        newMacro += generateActionsFromActiveTypes(types, activeTypesIds)
        newMacro += runFullCycle(types, actionsOrderArray, fullCycle, 'end', i)
    }
    callback(newMacro)
}

function getTypesIds(types, fixedType) {
    let activeTypesIds = fixedType ? fixedTypeModels[fixedType] : getActiveTypesIds(types)
    return activeTypesIds
}

function runFullCycle(types, actionsOrderArray, fullCycle, position, loopIndex) {
    let newMacro = ''
    if (fullCycle) {
        types.forEach(action => {
            if (action[position]) {
                let newaction = action.list[actionsOrderArray[loopIndex]]
                newMacro += `${newaction} \n`
            }
        })
    }
    return newMacro
}

function shouldRun(chance = 100) {
    let arrayChances = [...Array(100).keys()]
    let choosenNumber = shuffleArray(arrayChances)[0]
    if (choosenNumber > chance) return false
    else return true
}

function newRandOrderFixedActions(arrLength) {
    let arrayOrder = shuffleArray([...Array(arrLength).keys()])
    return arrayOrder
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateActionsFromActiveTypes(actionsArray, activeTypesIds) {
    let newActions = ''
    actionsArray.forEach(action => {
        if (activeTypesIds.includes(action.id)) {
            newActions += newRandActionPosRandomized(action)
        }
    })
    return newActions
}

function newRandActionPosRandomized(action) {
    let newMacro = ''
    for (let i = 0; i < action.n_loops; i++) {
        if (shouldRun(action.chance))
            action.rand_pos ?
                newMacro += runRandomizer(getRandomItem(action.list)) + '\n'
                : newMacro += getRandomItem(action.list) + '\n'
    }
    return newMacro
}

function getActiveTypesIds(types) {
    let activeTypes = types.filter(type => type.run)
    let activeTypesIds = activeTypes.map(type => type.id)
    return activeTypesIds
}