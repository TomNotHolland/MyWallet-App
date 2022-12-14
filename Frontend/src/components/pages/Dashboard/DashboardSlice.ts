import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDashboard = createAsyncThunk(
	'Summary',
	async (URL: string) => {
		const response = await fetch(URL)
		return response.json()
	}
)

const DashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		summary: { credit: 0, debt: 0 },
		fetchStatus: 'default',
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchDashboard.fulfilled,
      (state, action) => {
				state.summary = action.payload;
				state.fetchStatus = 'success';
			}).addCase(fetchDashboard.pending,
        (state) => {
				state.fetchStatus = 'awaiting';
			}).addCase(fetchDashboard.rejected,
        (state) => {
				state.fetchStatus = 'failed';
			})
	},
})

export default DashboardSlice;
