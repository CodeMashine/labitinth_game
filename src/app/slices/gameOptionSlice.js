import { createSlice } from '@reduxjs/toolkit' ;


const initialState = {
    side: 3 ,
    steps: 10 ,
}

export const gameOptionSlice = createSlice({
    name: 'gameOption',
    initialState ,
    reducers: {
      incrementSide: (state) => {
        state.side += 1 ;
      },
      decrementSide: (state) => {
        if (state.side  === 1){
            return ;
        }else{
            state.side -=1 ;
        } 
      },
      incrementStep:(state)=>{
        state.steps +=1 ;
      } ,
      decrementSteps:(state)=>{
        if (state.steps === 1){
         return ;
        }else{
            state.steps -=1 ;
        } 
      }
    },
  })
  
  export const { incrementSide, decrementSide, incrementSteps ,decrementSteps } = gameOptionSlice.actions
  
  export default gameOptionSlice.reducer