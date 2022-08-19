import * as axios from "axios"


export const API_URL = `http://localhost:3001/`

export const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL
})