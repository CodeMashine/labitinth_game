import React from "react";
import GameField from "./app/components/GameField/GameField";
import StartPage from './app/components/StartPage/StartPage'

import { useSelector } from "react-redux" ;

export default function App() {
  const isEnd = useSelector(state => state.gameOption.isEnd) ; 
  return (<div className = "flex w-screen h-screen md:w-[60%] md:mx-auto">
    { isEnd ? <StartPage/> :<GameField/> }
  </div>)
}

