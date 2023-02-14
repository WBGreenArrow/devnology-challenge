import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth'

const userToken = getTokenFromLocalStorage()

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${userToken}`,
    ContentType: 'application/json',
  },
})

export { api }
