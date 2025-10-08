import { createSlice } from "@reduxjs/toolkit";

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
        updateRate(state, action) {
            state.rateType = action.payload
        }
    }
});


export const { updateRate } = rentalSlice.actions
export default rentalSlice.reducer