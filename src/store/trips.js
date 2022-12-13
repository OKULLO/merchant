import { createSlice } from '@reduxjs/toolkit'

const initialState ={ trips:[],success:false,isError:false}

  
const slice = createSlice({
  name: 'trips',
  initialState: {
    trips: initialState,
  },

  reducers: {
      reset: (state) =>initialState
    },
    

})

export default slice.reducer
export const { reset } = slice.actions
