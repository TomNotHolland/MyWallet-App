import { combineReducers } from "redux";

const RootReducer = combineReducers({
  dashboard: () => ({summary: {credits: 1000, debts: 50}})
})

export default RootReducer