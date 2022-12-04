// import React, { useState , useEffect , useRef } from "react";

// export default function RoadSign(props) {
    
//     const [counter, setCounter] = useState(1);
    
//     const [sign, setSign] = useState('ready');

//     const gameResult = props.gameResult;


//     useEffect(() => {
        
//     }) ;




//     function waySign () {
 
//     if (gameResult === "in Process") {
//         let way = props.way;
//         setTimeout(() => {
//             if (counter === way.length + 1) {
//                 setSign("finish");
//                 return;
//             }
//             setSign(`step ${counter} ${way[counter - 1]}`);
//             setCounter(counter + 1);
//         }, 1000);

//         return sign ;
//     } else {
//         return gameResult ;

//     }
// }

//     return  <div className = {`text-7xl font-extrabold mb-[2rem] `}>
//         {waySign()}
//     </div>
// }




import React, { useState , useEffect , useRef } from "react";

export default function RoadSign( {way , gameResult} ) {
    
    const counterRef = useRef(1) ;

    const timerRef = useRef('') ;

    const clearTimeoutRef = useRef(false) ;
    
    const signRef = useRef('ready') ;

    const [ sign , setSign ] = useState('ready') ;
   
    console.log(way[counterRef.current]) ;
    
    counterRef.current += 1 ;
    
    console.log(way[counterRef.current]) ;

    useEffect ( () => {
        if (counterRef.current <= way.length-1) {
                timerRef.current = setTimeout(()=>{
                if(counterRef.current === way.length-1){
                    setSign(`finish`) ;
                    return ;
                }else{
                    setSign(`step ${ counterRef.current } --- ${ way[counterRef.current - 1] }`) ;
                }
                
                clearTimeoutRef.current = !clearTimeoutRef.current ;
            } , 1000) ;
        }else if ( gameResult !== 'in Process') {
            setSign(gameResult) ;
        }
    } ) ;

    useEffect(() => {
        clearTimeout(clearTimeoutRef.current) ;
    } , [clearTimeoutRef]) ;


    return (
        <div>
            {sign}
        </div>
    )


   
}