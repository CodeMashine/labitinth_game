import { createSlice } from '@reduxjs/toolkit' ;


const initialState = {
    side: 3 ,
    steps: 10 ,
    isEnd:true,
}

export const gameOptionSlice = createSlice({
    name: 'gameOption',
    initialState ,
    reducers: {
      setDifficulty: (state , action) => {
        state.side = action.payload ;
        if (action.payload[0]<=0) action.payload[0]=1 ;
        if (action.payload[1]<=0) action.payload[1]=1 ;
        state.side = action.payload[0] ;
        state.steps = action.payload[1]
        // return {...state , side :action.payload[0] , steps:action.payload[1]}
      },

      gameOver: (state , action) => {
        return {...state , isEnd:action.payload}
      }
      // decrementSide: (state) => {
      //   if (state.side  === 1){
      //       return ;
      //   }else{
      //       state.side -=1 ;
      //   } 
      // },
      // incrementStep:(state)=>{
      //   state.steps +=1 ;
      // } ,
      // decrementSteps:(state)=>{
      //   if (state.steps === 1){
      //    return ;
      //   }else{
      //       state.steps -=1 ;
      //   } 
      // }
    },
  })
  
  export const { setDifficulty , gameOver } = gameOptionSlice.actions
  
  export default gameOptionSlice.reducer