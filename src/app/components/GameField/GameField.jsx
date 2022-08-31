import React , {useState} from "react";
import { useSelector } from "react-redux";
// import styles from "../gameStyle.module.css" ;
import gameCreator from "../functions/gameCreator";
import FieldCreator from "./FieldCreator";
import RoadSign from "../RoadSign";

export default function GameField(){
    const side = useSelector(state=>state.gameOption.side) ;
    const steps = useSelector(state=>state.gameOption.steps) ;
    const [data ,roadSign] = gameCreator(side , steps) ;
    const [gameResult , setGameResult] = useState("in Process") ;


        return  <div>
        <FieldCreator 
        data = {data}
        setGameResult = {setGameResult}  />
        <RoadSign
        way = {roadSign}
        gameResult = {gameResult}  />
        </div>
}