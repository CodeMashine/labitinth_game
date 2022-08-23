import React  from "react";
import { useSelector } from "react-redux";
import styles from "../gameStyle.module.css" ;
import gameCreator from "../functions/gameCreator";
import FieldCreator from "./FieldCreator";
import RoadSign from "../RoadSign";

export default function GameField(){
    const side = useSelector(state=>state.gameOption.side) ;
    const steps = useSelector(state=>state.gameOption.steps) ;
    const [data ,roadSign] = gameCreator(side , steps) ;
    roadSign.push('finish')

        return  <>
        <FieldCreator 
        data = {data} />
        <RoadSign
        way = {roadSign}/>
        </>
}