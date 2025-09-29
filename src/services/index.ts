import axios from "axios"


const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Sheltr-Custom-Header': 'Zzz'
    }
})

export default api