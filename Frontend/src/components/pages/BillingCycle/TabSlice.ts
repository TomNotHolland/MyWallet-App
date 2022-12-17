import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export function selectTab(TabId: string) {
	return {
		type: 'TAB_SELECTED',
		payload: TabId,
	}
}

const TabSlice = createSlice({
	name: 'tab',
	initialState: {},
	reducers: {
		TabDefault: (state, action: PayloadAction<string>) => {
			switch (action.type) {
				case 'TAB_SELECTED':
					return { ...state , selectStatus: action.payload }
				default:
					return state
			}
		},
	},
})

export default TabSlice