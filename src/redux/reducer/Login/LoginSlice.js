import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData } from '../../actions'
import { saveJWT } from  '../../../utils/localstore'

const initialState = {
    loding: false,
    isAuthenticated: false,
    jwt: null,
    error: null,
    pageReload:true
}
export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setJWT: (state, action) => {
            return {
                ...state,
                jwt: action.payload,
                isAuthenticated: true,
                error: null,
                pageReload:false
            }
        },
        removeJWTtoken: (state, action) => {
            return {
                ...state,
                jwt: null,
                isAuthenticated: false,
                error: null
            }
        },
        setLoding: (state,action) => {
            return {
                ...state,
                pageReload: action.payload
            }
        },    

    },
    extraReducers: {
        [fetchUserData.pending]: (state, action) => {
            state.loding = true
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.loding = false
            state.isAuthenticated = true
            state.jwt = action.payload.token
            saveJWT(action.payload.token);
        },
        [fetchUserData.rejected]: (state, action) => {
            state.loding = false
            state.error = action.error.message
        }
    }
})
export const { loginRequest, loginSuccess, loginFailure ,setJWT ,removeJWTtoken ,setLoding} = LoginSlice.actions
export default LoginSlice.reducer