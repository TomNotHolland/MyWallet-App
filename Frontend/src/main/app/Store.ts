import { configureStore } from '@reduxjs/toolkit'
import Reducers from './Reducers'

export const ReduxStore = configureStore({
  reducer: {Reducers}
})

export type RootState = ReturnType<typeof ReduxStore.getState>
export type AppDispatch = typeof ReduxStore.dispatch