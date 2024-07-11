import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)

}
const remove = (id) =>{
    const fullUrl = `${baseUrl}/${id}`
    const request = axios.delete(fullUrl)
    return request.then(response => response.data)
}
const update = (id,newObject) =>{
    const fullUrl = `${baseUrl}/${id}`
    const request = axios.put(fullUrl,newObject)
    return request.then(response =>response.data )

}
export default {
    getAll,
    create,
    remove,
    update
}