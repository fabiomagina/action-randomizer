export default function runRandomizer(pureAction) {
    let newAction = ''
    let splittedActionLinesArray = pureAction.split('\n')
    splittedActionLinesArray.forEach(actionLine => {
        newAction += addRandomToNumbers(actionLine)
    })
    return newAction
}


function addRandomToNumbers(actionLine) {
    let oldNumbersArray = actionLine.match(/(\d+)/g)
    if (oldNumbersArray) {
        let newNumbersArray = oldNumbersArray.map(
            (oldNumber) => addRandom(oldNumber).toString())
        var newActionLine = newNumbersArray.reduce(function (acc, newValue, i) {
            return acc.replace(oldNumbersArray[i], newValue)
        }, actionLine)
        console.log(actionLine)
        return newActionLine
    }
    if (actionLine)
        return actionLine
}

function addRandom(number) {
    if (+number > 1) {
        let oldNumber = +number
        const c = Math.floor(Math.random() * 12) - 6
        let newNumber = c + oldNumber
        if (newNumber > 0) return newNumber
        else return 10
    } if (+number === 1)
        return 1
    else {
        return 0
    }
}
