import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboard: () => ({summary: {credits: 1000, debts: 50}})
})

export default rootReducer