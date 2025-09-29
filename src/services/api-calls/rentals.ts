
import api from "@/services"
import { type Rentals } from "@/types"

export const fetchRentals = async (): Promise<Rentals[]> => {
    try {
        const res = await api.get<Rentals[]>('/data/data.json')

        if (!Array.isArray(res.data)) throw new Error('Invalid response');

        return res.data
    } catch (error) {
        if (error instanceof Error) {

            console.log('Caugth Error: ', error.message)
        } else {
            console.log('Unknown Error: ', error)
        }

        throw error
    }
}