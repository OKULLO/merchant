import { createSlice } from '@reduxjs/toolkit'

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

  
const slice = createSlice({
  name: 'auth',
  initialState: {
    user: initialUser,
  },

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },

    logoutSuccess: (state, action) => {
      state.user = null
      localStorage.removeItem('user')
    },
    registerSuccess:(state, action) =>{
      state.user = action.payload
    },

    updateSuccess:(state,action) =>{
      state.user = action.payload
    }
  },
})

export default slice.reducer
export const { loginSuccess, logoutSuccess,registerSuccess ,updateSuccess} = slice.actions
