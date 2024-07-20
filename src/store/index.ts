import { configureStore } from '@reduxjs/toolkit'
import asideReducer from './reducers/aside'

const store = configureStore({
  reducer: {
    aside: asideReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
