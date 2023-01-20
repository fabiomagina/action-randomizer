
export default function runRandomizer(pureAction) {
    let newAction = ''
    let splittedOld = pureAction.split('\n')
    splittedOld.forEach((actionLine, i) => {
        let oldNumbersLineArray = actionLine.match(/(\d+)/g)
        if (oldNumbersLineArray) {
            let newNumbersLineArray = oldNumbersLineArray.map((oldNumber) => {
                return addRandom(oldNumber).toString()                
            })
            var newActionLine = newNumbersLineArray.reduce(function (acc, newValue, i) {
                return acc.replace(oldNumbersLineArray[i], newValue)
            }, actionLine)
            return newAction += newActionLine + '\n'
        }
    })
    return newAction
}

function addRandom(number) {
    if (number != 0) {
        let oldNumber = +number
        const c = Math.floor(Math.random() * 6) - 2
        let newNumber = c + oldNumber
        return newNumber
    } else {
        return 0
    }
}
