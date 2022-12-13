import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

  
const slice = createSlice({
  name: 'marketplace',
  initialState: {
    products: initialState,
  },

  reducers: {
    orderSuccess: (state, action) => {
      state.orders = action.payload
    },

    logoutSuccess: (state, action) => {
      state.user = null
      localStorage.removeItem('user')
    },
    registerSuccess:(state, action) =>{
      state.user = action.payload
    }
  },
})

export default slice.reducer
export const { loginSuccess, logoutSuccess,registerSuccess,orderSuccess } = slice.actions
