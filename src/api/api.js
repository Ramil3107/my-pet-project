import * as axios from "axios"


export const API_URL = `https://us-central1-my-pet-project-18f42.cloudfunctions.net/`

export const instance = axios.create({
    baseURL: API_URL
})