import { createSlice } from '@reduxjs/toolkit'

export const chartSlice = createSlice({
    name: 'attribute',
    initialState: {
        value: 'retailSales'
    },
    reducers:{
        changeAttribute: (state, action) => {
            state.value = action.payload
            alert("now setting attribute:")
        }
    }
})

export const { changeAttribute } = chartSlice.actions
export default chartSlice.reducer
export const selectAttribute = state => state.attribute.value