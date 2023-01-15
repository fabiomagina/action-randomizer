import { postGenerated } from "./axios"
import getRandomItem from "./getRandomItem"
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

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

function newAction(pureAction) {
    let newAction = ''
    let splittedOld = pureAction.split('\n')
    console.log(splittedOld)
    let newActionArray = ''
    splittedOld.map((actionLine, i) => {
        let oldNumbersLineArray = actionLine.match(/(\d+)/g)
        if (oldNumbersLineArray) {
            let newNumbersLineArray = oldNumbersLineArray.map((oldNumber) => (addRandom(oldNumber).toString()))
            var newActionLine = newNumbersLineArray.reduce(function (acc, newValue, i) {
                return acc.replace(oldNumbersLineArray[i], newValue)
            }, actionLine)
            newAction += newActionLine + '\n'
        }
    })
    return newAction
}

function runRandomizer(actionModelo) {
    return newAction(actionModelo)
}

export default runRandomizer