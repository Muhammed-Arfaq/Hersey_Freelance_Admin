import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    show : false
}

const vendorDetails = createSlice({
  name: 'vendor',
  initialState: INITIAL_STATE,
  reducers: {
    setCreateSwitchOn: (state) => {
      state.show = true
    },
    setCreateSwitchOff: (state) => {
        state.show = false
    }
  }
})

export const { setCreateSwitchOff, setCreateSwitchOn } = vendorDetails.actions;
export default vendorDetails.reducer;