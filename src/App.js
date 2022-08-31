import React from "react";
import GameField from "./app/components/GameField/GameField";
import StartPage from './app/components/StartPage/StartPage'

import { useSelector } from "react-redux" ;

export default function App() {
  const isEnd = useSelector(state => state.gameOption.isEnd) ; 
  // return (<div className = "flex flex-col items-center">
  return (<div className = "flex items-center">
    { isEnd ? <StartPage/> :<GameField/> }

  </div>)
}

