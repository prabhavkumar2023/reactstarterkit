import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: false,
  loadingScreen:true,
}

export const globelConfigSlice = createSlice({
  name: 'globel',
  initialState,
  reducers: {
    toggleSidebar: (state,action ) => {
        return {...state,sidebarShow : action.payload}
    },
    toggleLoadingScreen: (state,action ) => {
        return {...state,loadingScreen : action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleSidebar , toggleLoadingScreen } = globelConfigSlice.actions

export default globelConfigSlice.reducer