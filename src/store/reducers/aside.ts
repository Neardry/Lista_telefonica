import { createSlice } from '@reduxjs/toolkit'

const asideSlice = createSlice({
  name: 'aside',
  initialState: false,
  reducers: {
    aparece: (state) => {
      return !state
    }
  }
})

export const { aparece } = asideSlice.actions
export default asideSlice.reducer
