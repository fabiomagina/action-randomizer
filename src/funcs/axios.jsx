import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function sendAction(type, action, callback, reload) {
    let url = `${baseUrl}/pures/${type}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = data.list
            list.push(action)
            axios.put(url, { id: type, title: data.title, list: list })
        })
        .then(() => updateCounterDb(reload))
        .then(() => callback())
}

export function postGenerated(reload, action, type, clearCallback,) {
    let url = `${baseUrl}/pures/${type}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = data.list
            list.push(action)
            axios.put(url, { id: type, title: data.title, list: list })
        })
        .then(() => updateCounterDb(reload))
        .then(() => clearCallback())
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

export function getActions() {
    return axios.get(`${baseUrl}/pures`)
        .then(res => res.data)
}

export function clearActionsDb(type, reload) {
    let url = `${baseUrl}/generated/${type}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = []
            axios.put(url, { id: type, title: data.title, list: list })
        })
        .then(() => updateCounterDb(reload))
}

export function getTypes(setTypes) {
    let url = `${baseUrl}/pures/`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let arrayTipos = []
            data.forEach(type => arrayTipos.push({ id: type.id, title: type.title }))
            return arrayTipos
        })
        .then(res =>
            setTypes(res))
}

export function saveTypeTitle(typeId, typeTitle, callback) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            const type = data
            type.title = typeTitle
            axios.put(url, type)
                .then(getTypes(callback))
                .then(console.log)
        })
}

export function postNewType(typeTitle) {
    let url = `${baseUrl}/pures`
    let newType = { title: typeTitle, list: []}
    axios.post(url, newType)
        .then(console.log)
}