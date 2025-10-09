
import api from "@/services"
import { type Rental } from "@/types"

export const fetchRentals = async (): Promise<Rental[]> => {
    try {
        const res = await api.get<Rental[]>('/public/data/data.json')

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


export const viewRental = async (slug: string): Promise<Rental> => {
    try {
        const res = await api.get<Rental[]>('/public/data/data.json')

        if (!Array.isArray(res.data)) throw new Error('Invalid response');

        return res.data.filter((rental) => rental.slug === slug)[0]

    } catch (error) {
        if (error instanceof Error) {

            console.log('Caugth Error: ', error.message)
        } else {
            console.log('Unknown Error: ', error)
        }

        throw error
    }
}   