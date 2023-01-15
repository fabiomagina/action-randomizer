
export const addRandomNumbers = (array) => {

    let novo_array = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            const c = (Math.floor(Math.random() * 5) - 2)
            let n = +array[i] + c
            novo_array += (`${n},`)
        } else {
            novo_array += (',')
        }
    }
    
}