import { createSlice } from '@reduxjs/toolkit' ;


const initialState = {
    side: 3 ,
    steps: 1 ,
    isEnd:true,
    // isEnd:false,
}

export const gameOptionSlice = createSlice({
    name: 'gameOption',
    initialState ,
    reducers: {
      setDifficulty: (state , action) => {
        if (action.payload[0]<=0) action.payload[0]=1 ;
        if (action.payload[1]<=0) action.payload[1]=1 ;
        state.side = action.payload[0] ;
        state.steps = action.payload[1]
      },
      changeSide: (state , action)=>{
        if (action.payload === "increase"){
          if (state.side === 15){
            state.side = 3 ;
          }else{
            state.side = state.side+1 ;
          }
        }

        if (action.payload === "decrease"){
          if(state.side===3){
            state.side = 15 ;
          }else {
            state.side = state.side-1 ;
          }
        }

      },

      changeSteps:(state , action)=>{
        if (action.payload === "increase"){
          if (state.steps === 15){
            state.steps = 1 ;
          }else{
            state.steps = state.steps+1 ;
          }
        }

        if (action.payload === "decrease"){
          if(state.steps===1){
            state.steps = 15 ;
          }else {
            state.steps = state.steps-1 ;
          }
        }
      },


      gameOver: (state , action) => {
        // return {...state , isEnd:action.payload}
        state.isEnd = action.payload ;
      }

    },
  })
  
  export const { setDifficulty , changeSide , changeSteps , gameOver } = gameOptionSlice.actions
  
  export default gameOptionSlice.reducer