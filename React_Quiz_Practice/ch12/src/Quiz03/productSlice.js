import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addproduct: (state, action) => {
           state.push({id:Date.now(), text:action.payload})
        },

        removeproduct: (state, action) => {
           return state.filter((pro) => pro.id !== action.payload)
        },
    },
})

export default productSlice.reducer
export const {addproduct,removeproduct} = productSlice.actions