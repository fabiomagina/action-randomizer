import shuffleArray from "./shuffleArray"

function getRandOrderToFixedActions(arrLength) {
    let arrayOrder = shuffleArray([...Array(arrLength).keys()])
    return arrayOrder
}

export default getRandOrderToFixedActions