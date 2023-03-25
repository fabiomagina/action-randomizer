import axios from 'axios'

const baseUrl = 'http://localhost:8080'

export function sendAction(typeId, action, callback, reload) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(type => {
            type.list.push(action)
            axios.put(url, type)
                .then(reload())
                .then(callback())
        })
}

export function getActions(callback) {
    return axios.get(`${baseUrl}/pures`)
        .then(res => res.data)
        .then(callback)
}

export function clearActionsFromType(typeId, reload) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = []
            axios.put(url, {
                id: typeId, title: data.title, n_loops: 1,
                run: false, rand_pos: false, list: list
            })
        })
        .then(reload)
}

export function saveTypeChanges(typeId, typeTitle, n_loops, chance, reload) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            const type = data
            type.title = typeTitle
            type.n_loops = n_loops
            type.chance = chance
            axios.put(url, type)
                .then(reload(Math.random))
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
            getActions(callback);
        }, 50))
}

export function setStatus(typeId, status, statusType, callback1, callback2) {
    let url = `${baseUrl}/pures/${typeId}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            const type = data
            type[statusType] = status
            console.log(type)
            axios.put(url, type)
                .then(setTimeout(function () {
                    getActions(callback1);
                }, 300))
                .then(setTimeout(function () {
                    getActions(callback2);
                }, 300))
        })
}

