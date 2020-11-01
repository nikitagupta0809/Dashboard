import { configureStore } from '@reduxjs/toolkit'
import chartReducer from '../features/charts/chartSlice'

export default configureStore({
    reducer:{
        attribute: chartReducer
    },
});