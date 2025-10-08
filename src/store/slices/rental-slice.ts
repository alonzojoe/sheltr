import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface RentalSlice {
    rateType: 'daily' | 'monthly',
}

const initialState: RentalSlice = {
    rateType: 'daily'
}

const rentalSlice = createSlice({
    name: "rentals",
    initialState,
    reducers: {
        updateRate(state, action: PayloadAction<'daily' | 'monthly'>) {
            state.rateType = action.payload
        }
    }
});


export const { updateRate } = rentalSlice.actions
export default rentalSlice.reducer