import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { gameOver } from "../../slices/gameOptionSlice" ;
import styles from "../../components/gameStyle.module.css" ;
// import StartPage from "../StartPage/StartPage";


export default function FieldCreator(props) {
    const [data, setData] = useState(props.data);
    const dispatch = useDispatch() ;


    function CheckResult(num, data, setData) {   /// можно попытаться и сделать несколько попыток
        let newData = Object.assign([], data);
        setData(newData.map(row => {
            return row.map(cell => {
                if (cell.isEnd) {
                    return { ...cell, show: true }
                } else {
                    if (cell.num === num) return { ...cell, isChoose: true };
                    // return { ...cell, isChoose: false };
                    return cell;
                }
                


            })
        }))

        // if(endPoint === num) console.log('you win')
    }

    let table = <table className = {styles.field}>
        <tbody>
            {data.map((row, rowIndex) => {
                return <tr key={`${rowIndex}row`}>
                    {row.map((cell, cellIndex) => {
                        let classList = [];
                        if (cell.isStart) classList.push(`${styles.start}`);
                        if (cell.isChoose) classList.push(`${styles.chosen}`);
                        // if (cell.isEnd) classList.push("end");
                        if (cell.show) classList.push(`${styles.show}`);

                        return <td key={`${rowIndex}row${cellIndex}cell`} className={classList.join(' ')}
                            onClick={() => {
                                CheckResult(cell.num, data, setData);

                                setTimeout(()=>{
                                    dispatch(gameOver(true)) ;
                                } , 2000)
                            }}
                        >
                            {/* {cell.num} */}
                        </td>
                    })}
                </tr>
            })
            }
        </tbody>
    </table>

    return table;
}