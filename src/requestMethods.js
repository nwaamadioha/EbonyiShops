import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk2OTI2ZTAyMzI5YzAxOWZhYmVjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc5NDU0MywiZXhwIjoxNjU4MDUzNzQzfQ.htgdmx1WyxygTBxFvplfOrydcEl3Zs3g9-rwQIz5RBk"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` }
})