import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const getList = createAsyncThunk(
  'List',
  async (URL: string) => {
    const response = await fetch(URL)
    return response.json()
  }
)

export async function createdValues(values: string) {
  const BackendURL = 'http://localhost:3000/api'
    await axios.post(`${BackendURL}/billingcycle`, values)
      .then(() => (
        toast.success('Sucessful operation', { icon: '✅' })
      ))
      .catch(error => (
        error.response.data.errors.forEach((reason: string) => toast.error(`Error: ${reason}`))
      ))
}

const BillingCycleSlice = createSlice({
  name: 'Billing Cycle',
  initialState: {
    list: [],
    status: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getList.fulfilled,
      (state, action: PayloadAction<[]>) => {
        state.status = 'success'
        state.list = action.payload
      }
    ).addCase(
      getList.pending,
      (state) => {
        state.status = 'awaiting data'
      }
    ).addCase(
      getList.rejected,
      (state) => {
        state.status = 'failed'
      }
    ).addDefaultCase(
      (state) => {
        return state
      }
    )
  }
})

export default BillingCycleSlice