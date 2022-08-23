import dataCreator from "./dataCreator";
import wayFinder from "./wayFinder";
import startSheetFinder from "./startSheetFinder";


export default function gameCreator( side , steps){
    const startCell = startSheetFinder(side) ;
    let semiData = dataCreator(side , startCell) ;
    const [roadSign , data] = wayFinder(semiData , steps ,side) ;
    return [data ,roadSign] ; 
}