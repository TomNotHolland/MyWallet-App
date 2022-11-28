import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import RootReducer from './Reducers'
import promiseMiddleware from 'redux-promise'

export const ReduxStore = applyMiddleware(promiseMiddleware)(createStore)(RootReducer)