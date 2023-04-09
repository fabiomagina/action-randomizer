import shuffleArray from "./shuffleArray"

function getRandOrderToFixedActions(arrLength) {
    let arrayOrder = shuffleArray([...Array(arrLength).keys()])
    console.log(arrayOrder)
    return arrayOrder
}

export default getRandOrderToFixedActions