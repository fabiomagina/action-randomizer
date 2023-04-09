import shuffleArray from "./shuffleArray"

function shouldRun(chance = 100) {
    let arrayChances = [...Array(100).keys()]
    let choosenNumber = shuffleArray(arrayChances)[0]
    if (choosenNumber > chance) return false
    else return true
}

export default shouldRun