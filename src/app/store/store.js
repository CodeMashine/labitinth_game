import { configureStore } from '@reduxjs/toolkit' ;
import gameOption from "../slices/gameOptionSlice" ;

export default configureStore({
  reducer: {
    gameOption : gameOption ,

  },
})