import { createSlice } from '@reduxjs/toolkit' ;


const initialState = [] ;

export const waySlice = createSlice({
    name: 'way',
    initialState ,
    reducers: {
      setWay: (state , action) => {
        return action.payload ;
    } ,
    }  
})
  
  export const { setWay } = waySlice.actions ;
  
  export default waySlice.reducer ;