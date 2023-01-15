import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function sendAction(type, action, callback, reload) {
    let url = `${baseUrl}/pures/${type}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = data.list
            list.push(action)
            
            axios.put(url, { id: type, list: list })
        })
        .then(() => updateCounterDb(reload))
        .then(() => callback())
}

export function postGenerated(obj, reload) {
    let url = `${baseUrl}/generated/`
    axios.post(url, obj)
        .then(() => updateCounterDb(reload, 'created'))
}

export function updateCounterDb(reload, type = 'actions') {
    let url = `${baseUrl}/counter`
    axios.get(url)
        .then(res => res.data)
        .then(res => {
            
            let counter = { ...res, [type]: res[type] + 1 }
            axios.put(url, counter)
            reload(counter)
        })
}

export function getCounter(reload) {
    axios.get(`${baseUrl}/counter`)
        .then(res => res.data)
        .then(reload)
}

export function showResults(callback) {
    axios.get(`${baseUrl}/generated`) 
        .then(res => res.data)
        .then(callback)
    }

export function getActionsById(arrayIds) {
    axios.get(`${baseUrl}/actions/${arrayIds})`)
        .then(res => res.data)
        .then(console.log)
}