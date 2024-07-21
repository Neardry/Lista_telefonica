import { configureStore } from '@reduxjs/toolkit'
import asideReducer from './reducers/aside'
import opcoesCard from './reducers/opcoesCard'

const store = configureStore({
  reducer: {
    aside: asideReducer,
    user: opcoesCard
  }
})

//Infere o tipo diretamente no rooteState e appDispatch (useSelector e useDispatch)
export type RootState = ReturnType<typeof store.getState>
//Faz com que infira os tipos diretamente nos reducers
export type AppDispatch = typeof store.dispatch

export default store
