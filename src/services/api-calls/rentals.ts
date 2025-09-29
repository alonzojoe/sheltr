
import api from "@/services"

export const fetchRentals = async (type: string) => {
    try {
        const res = api.get('/src/data/data.json')

        return res.data
    } catch (error) {
        if (!(error instanceof Error)) {
            console.log('Unknown Error: ', error)
            return
        }
        console.log('Caugth Error: ', error.message)
        throw error
    }
}