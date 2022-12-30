import React , {useState} from "react";
import { useSelector } from "react-redux";
import gameCreator from "../functions/gameCreator";
import FieldCreator from "./FieldCreator";
import RoadSign from "./RoadSign";

export default function GameField(){
    const { side , steps} = useSelector(state=>state.gameOption) ;
    const [ data ,roadSign ] = gameCreator(side , steps) ;
    const [ gameResult , setGameResult ] = useState("in Process") ;


        return  <div className = {`flex flex-col w-[100%] h-[100%] items-center mt-[10rem] lg:mt-[4rem]`}>
        
        <FieldCreator 
        data = {data}
        setGameResult = {setGameResult}  />
        
        
        <RoadSign
        way = {roadSign}
        gameResult = {gameResult}  />
        
        </div>
}