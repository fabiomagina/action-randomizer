import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function sendAction(typeId, action, callback, reload) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(type => {
            type.list.push(action)
            axios.put(url, type)
        })
        .then(() => updateCounterDb(reload))
        .then(() => callback())
}

export function postGenerated(reload, action, type, clearCallback) {
    let url = `${baseUrl}/pures/${type}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            type.list.push(action)
            axios.put(url, type)
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
            reload()
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

export function clearActionsFromType(typeId, reload) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = []
            axios.put(url, {
                id: typeId, title: data.title, n_loops: 1,
                status: false, pos_status: false, list: list
            })
        })
        .then(reload)
}

export function getTypes(setTypes) {
    let url = `${baseUrl}/pures/`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let arrayTipos = []
            data.forEach(type => arrayTipos.push(
                { id: type.id, title: type.title, status: type.status, pos_status: type.pos_status, n_loops: type.n_loops }))
            return arrayTipos
        })
        .then(setTypes)
}

export function saveTypeChanges(typeId, typeTitle, n_loops, reload) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            const type = data
            type.title = typeTitle
            type.n_loops = n_loops
            axios.put(url, type)
                .then(reload(1))
        })
}

export function postNewType(typeTitle, pos_status, n_loops) {
    let url = `${baseUrl}/pures`
    let newType = { title: typeTitle, status: 0, pos_status, n_loops, list: [] }
    axios.post(url, newType)
}

export function deleteType(id, callback) {
    let url = `${baseUrl}/pures/${id}`
    axios.delete(url)
        .then(setTimeout(function () {
            getTypes(callback);
        }, 50))
}

export function setStatus(typeId, typeStatusType, status, callback) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            const type = data
            type[typeStatusType] = status
            axios.put(url, type)
                .then(setTimeout(function () {
                    getTypes(callback);
                }, 100))
        })
}

