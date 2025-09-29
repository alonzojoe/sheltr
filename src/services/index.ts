import axios from "axios"


const api = axios.create({
    headers: {
        'Sheltr-Custom-Header': 'Zzz'
    }
})

export default api