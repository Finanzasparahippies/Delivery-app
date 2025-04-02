import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
        // console: console.log("API_URL: ", process.env.NEXT_PUBLIC_API_URL),
    headers: {
        'Content-Type': 'application/json',
        // "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});


export default API;