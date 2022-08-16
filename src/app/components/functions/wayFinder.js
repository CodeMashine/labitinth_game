export default function wayFinder(start, stepVolume , side){
    let sheetsAmount = side*side ;
    let current = start ;
    let result =[] ;
    for(let i = 0 ;i<stepVolume ;i++ ){
        let semiResult =[] ;
        
         if (current === 1 ) semiResult.push([current+1 , 'rigth']) ;

         if ((current-1)%side === 0) semiResult.push([current+1 , 'rigth']) ;

         if (current%side === 0 ) semiResult.push([current-1 , 'left']) ;
         
         if ((current+1)%side === 0 ) {
            semiResult.push([current-1 , 'left']) ;
            semiResult.push([current+1 , 'rigth']) ;
         }
        
        
        if (current+side<=sheetsAmount) semiResult.push([current+side , 'down']) ;
        
        if (current-side>0) semiResult.push([current-side , 'up']) ;
        let step = Math.floor(Math.random()*semiResult.length) ;
        
        result.push(semiResult[step][1]) ;
        current = semiResult[step][0] ;
    }
    
    return ([current , result]) ;
}
