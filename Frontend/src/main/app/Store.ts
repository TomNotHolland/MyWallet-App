import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import promiseMiddleware from "redux-promise";
import RootReducers from "./Reducers";

const ReduxStore = applyMiddleware(promiseMiddleware)(createStore)(RootReducers)

export default ReduxStore;
