import { configureStore } from '@reduxjs/toolkit' ;
import gameOption from "../slices/gameOptionSlice" ;
import points  from '../slices/pointsSlice';
import waySlice from '../slices/way';

export default configureStore({
  reducer: {
    gameOption : gameOption ,
    points: points ,
    way:waySlice,

  },
})