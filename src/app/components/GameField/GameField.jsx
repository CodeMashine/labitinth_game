import React , {useState} from "react";
import { useSelector } from "react-redux";
import gameCreator from "../functions/gameCreator";
import FieldCreator from "./FieldCreator";
import RoadSign from "../RoadSign";

export default function GameField(){
    const { side , steps} = useSelector(state=>state.gameOption) ;
    const [ data ,roadSign ] = gameCreator(side , steps) ;
    const [ gameResult , setGameResult ] = useState("in Process") ;


        return  <div className = {`flex flex-col w-full h-screen items-center mt-[10rem]`}>
            <RoadSign
            way = {roadSign}
            gameResult = {gameResult}  />
        <FieldCreator 
        data = {data}
        setGameResult = {setGameResult}  />
        </div>
}