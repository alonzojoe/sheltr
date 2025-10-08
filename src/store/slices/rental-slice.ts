import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type RateType } from "@/types"

interface RentalSlice {
    rateType: RateType,
}

const initialState: RentalSlice = {
    rateType: 'daily'
}

const rentalSlice = createSlice({
    name: "rentals",
    initialState,
    reducers: {
        updateRate(state, action: PayloadAction<RateType>) {
            state.rateType = action.payload
        }
    }
});


export const { updateRate } = rentalSlice.actions
export default rentalSlice.reducer