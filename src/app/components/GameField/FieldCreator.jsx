import React, { useState , useRef , useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { gameOver } from "../../slices/gameOptionSlice";
import styles from "./gameStyle.module.css";


export default function FieldCreator(props) {
    const [ data, setData ] = useState(props.data);
    const [ listener , setListener ] = useState(true) ;
    const [ clean , setClean ] = useState(false) ;
    const timerRef = useRef() ;


    useEffect(()=>{
        return ()=>clearTimeout(timerRef.current) ;
    } , [clean]);


    let setGameResult = props.setGameResult;
    
    const dispatch = useDispatch();


    function CheckResult(num, data, setData , setGameResult = false) {   
        let newData = Object.assign([], data);

        let result = newData.map(row => {
            return row.map(cell => {
                if (cell.num === num) {
                    cell = { ...cell, isChoose: true };
                } 
                if (cell.isEnd) {
                    cell = { ...cell, show: true };
                }
              return cell;
            })
        })
        setData(result) ;

        checkWin(result , setGameResult) ;

        setListener(false) ;
    }

    function checkWin(data , setGameResult){
        const copy = Object.assign([], data);
        const stack = copy.flat();
        let result = stack.find(item => (item.isChoose === true&&item.isEnd===true));
        setGameResult( result ? "You Win" : "You Lose" ) ;
    }
    


    let table = <table className = {`table-fixed h-full w-[100%]  border-[3px] border-separate border-spacing-[1rem]`}>
        <tbody>
            {data.map((row, rowIndex) => {
                return <tr key={`${rowIndex}row`}>
                    {row.map((cell, cellIndex) => {
                        let classList = ["border-[15px]"];
                        if (cell.isStart) classList.push(`${styles.start}`);
                        if (cell.isChoose)  classList.push(`${styles.chosen}`);

                        if (cell.show) classList.push(`${styles.show}`) ;

                        return <td key={`${rowIndex}row${cellIndex}cell`} 
                        className={`${classList.join(' ')}`}
                            onClick = {listener ? () => {
                                    CheckResult(cell.num, data, setData , setGameResult );
                                    timerRef.current = setTimeout(() => {
                                        dispatch(gameOver(true));
                                        setClean((clean=>!clean)) ;
                                    }, 2000)
                                }
                                : null 
                            }
                        >
                        </td>
                    })}
                </tr>
            })
            }
        </tbody>
    </table>

    return (
        <div className = {`w-[100%] h-[80%]`}>
            {table}
        </div>

    ) ;
}