import { createSlice } from '@reduxjs/toolkit' ;


const initialState = {
    start: 1 
}

export const points = createSlice({
    name: 'points',
    initialState ,
    reducers: {
      setStartPoint: (state , action) => {
        state.start = action.payload ;
      },
    },
  })
  
  export const { setStartPoint } = points.actions
  
  export default points.reducer