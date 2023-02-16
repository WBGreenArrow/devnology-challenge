import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    ContentType: 'application/json',
  },
})

api.interceptors.request.use(function (config) {
  const dataUser = getTokenFromLocalStorage()
  config.headers.Authorization = dataUser ? `Bearer ${dataUser.token}` : ''
  return config
})

export { api }
