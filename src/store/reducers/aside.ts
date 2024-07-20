import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const asideSlice = createSlice({
  name: 'aside',
  initialState: false,
  reducers: {
    aparece: (state, action: PayloadAction<boolean>) => {
      state = !action
    }
  }
})

export const { aparece } = asideSlice.actions
export default asideSlice.reducer
