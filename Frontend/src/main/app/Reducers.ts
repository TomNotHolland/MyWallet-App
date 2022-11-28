import { combineReducers } from "redux";
import DashboardReducer from '../../components/pages/Dashboard/Reducer'

const RootReducer = combineReducers({
  dashboard: DashboardReducer
})

export default RootReducer