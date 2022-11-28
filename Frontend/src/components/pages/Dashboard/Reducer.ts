import { PayloadAction } from '@reduxjs/toolkit';

const EntryPoint = {summary: {credit: 0, debt: 0}}

export default function (State = EntryPoint, Action: PayloadAction<any>) {
  switch (Action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return {...State, summary: Action.payload.data}
    default: 
      return State
  }
}