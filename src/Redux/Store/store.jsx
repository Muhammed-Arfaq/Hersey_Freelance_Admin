import { configureStore } from '@reduxjs/toolkit'
import vendorReducer from '../Reducer/vendorModal'

export const store = configureStore({
    reducer: {
        showVendorDetails: vendorReducer
    },
})