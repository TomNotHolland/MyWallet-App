import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export function TabSelected(TabId: string) {
  return {
    type: 'TAB_SELECTED',
    payload: TabId
  }
}

const TabSlice = createSlice({
  name: 'tab',
  initialState: {
    selectStatus: `${name}`
  },
  reducers: {
    TabDefault: (state, action: PayloadAction<string>) => {
      switch (action.type) {
        case 'TAB_SELECTED':
          return { ...state, selectStatus: action.type }
        default: return state
      }
    }
  }
})

export default TabSlice