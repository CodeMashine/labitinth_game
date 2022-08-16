
export default function startSheetFinder(side){
    let round = side*side ;
    return Math.floor(Math.random()*round+1) ;
}