import React from "react";
import GameField from "./app/components/GameField/GameField";
import RoadSign from "./app/components/RoadSign";
import StartPage from './app/components/StartPage/StartPage'

import { useSelector } from "react-redux" ;

export default function App() {
  const isEnd = useSelector(state => state.gameOption.isEnd) ; 

  // let content = isEnd ? <StartPage/> : <><GameField/><RoadSign/></>  ;

  // let content ; 

  // if (isEnd){
  //   content = <StartPage/> ;
  // }else{
  //   content = <><GameField/>
  //   <RoadSign/></>
  // }



  return (<div>
    { isEnd ? <StartPage/> :<GameField/> }

  </div>)
}

