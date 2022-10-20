import axios from 'axios'

const baseUrl = 'http://localhost:3000'


export function axios_post_action(type, action, callback) {
    let url = `${baseUrl}/pures/${type}`
    axios.get(url)
        .then(res => res.data)
        .then(data => {
            let list = data.list
            list.push(action)
            console.log(list)
            axios.put(url, {id: type, list: list})
        })
        .then(() => callback())

}

export function axios_post(obj) {
    let url = `${baseUrl}/generated/`
    axios.post(url, obj)
        .then(res => console.log(res.data))       

}