import axios from 'axios';
const server_url = process.env.NODE_ENV === 'development' ? "http://localhost:3333/api" : "http://natalsolidariolages.online/api";
const api = axios.create({
    baseURL: server_url
})

export default api;