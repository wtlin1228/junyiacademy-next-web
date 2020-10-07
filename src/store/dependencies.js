import axios from 'axios'

export const get = (endpoint, query) => axios.get(endpoint, { params: query })
export const post = (endpoint, query) => axios.post(endpoint, query)
