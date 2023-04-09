import runRandomizer from "./runRandomizer"
import getRandomItem from "./generateUtils/getRandomItem"
import shouldRun from "./generateUtils/shouldRun"

function newRandPosRandomizedAction(action) {
    let newMacro = ''
    for (let i = 0; i < action.n_loops; i++) {
        if (shouldRun(action.chance))
            action.rand_pos ?
                newMacro += runRandomizer(getRandomItem(action.list)) + '\n'
                : newMacro += getRandomItem(action.list) + '\n'
    }
    return newMacro
}

export default newRandPosRandomizedAction