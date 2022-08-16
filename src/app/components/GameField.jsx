import React  , {useState} from "react";
import { useSelector , useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import styles from "./gameStyle.module.css" ;
import startSheetFinder from "./functions/startSheetFinder";
import wayFinder from "./functions/wayFinder";
import { setStartPoint } from "../slices/pointsSlice";
import { setWay } from "../slices/way";
// import showEnd from "./functions/showEnd" ;


export default function GameField(){
    let side = useSelector(state=>state.gameOption.side) ;
    let steps = useSelector(state=>state.gameOption.steps) ;

    const startSheet = startSheetFinder(side) ;
    const dispatch = useDispatch() ;

    const [endPoint ,way] = wayFinder(startSheet , steps ,side ) ;

    const [endGame , setEndGame] = useState(false) ;

    dispatch(setStartPoint(startSheet)) ;
    dispatch(setWay(way)) ;
    console.log(endPoint , way) ;

    function checkEnd(){
        setEndGame(true) ;
        // console.log(endGame) ;
    }

    function render(num){
        let body = [] ;
        let counter = 1 ;
        for(let i = 0 ;i <num ;i++){
            let tr = [] ;
            for (let j =0 ; j<num ; j++){
                let label=null ;
                if (counter === startSheet){
                    label = styles.start ;
                }
                else if(counter === endPoint){
                    label?label += styles.end:label=styles.end ;
                }

                let sheetNum = counter ;

                tr.push(<td 
                    onClick ={()=>checkEnd(sheetNum)}
                    className = {label} key ={nanoid()} id= {"id"+sheetNum}
                    >
                    </td>) ;
                counter++ ;
            }
            body.push(<tr key ={nanoid()}>{tr}</tr>) ;
        }
        return body ;
    }
    
    
    return (
        <table key ={nanoid()}
            // onClick={checkEnd}
            className = {styles.field}
        >
                <tbody key={nanoid()}>
                    {render(side)}
                </tbody>
            </table>
    )
}