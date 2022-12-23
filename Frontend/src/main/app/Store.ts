import { configureStore } from '@reduxjs/toolkit'
import DashboardSlice from '../../components/pages/Dashboard/DashboardSlice'
import TabSlice from '../../components/pages/BillingCycle/TabSlice'
import BillingCycleSlice from '../../components/pages/BillingCycle/BillingCycleSlice'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => boolean | undefined
  }
}

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const ReduxStore = configureStore({
  reducer: {
    dashboard: DashboardSlice.reducer,
    tab: TabSlice.reducer,
    billingcycle: BillingCycleSlice.reducer,
  },
  devTools: DevTools
})

export type RootState = ReturnType<typeof ReduxStore.getState>
export type AppDispatch = typeof ReduxStore.dispatch

export default ReduxStore
