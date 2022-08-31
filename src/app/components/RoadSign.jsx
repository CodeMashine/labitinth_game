import React, { useState } from "react";

export default function RoadSign(props) {
    const [counter, setCounter] = useState(1);
    const [sign, setSign] = useState('ready');

    const gameResult = props.gameResult;
    
    if (gameResult === "in Process") {
        let way = props.way;
        let timer = setTimeout(() => {
            if (counter === way.length + 1) {
                setSign("finish");
                clearTimeout(timer);
                return;
            }
            setSign(` step ${counter} ${way[counter - 1]}`);
            setCounter(counter + 1);
        }, 1000);

        // if (counter === way.length + 1 ) {
            // clearTimeout(timer);
        // }

        return (<div>
            <h2>
                {sign}
            </h2>
        </div>)
    } else {
        return (<div>
            <h2>
                {gameResult}
            </h2>
        </div>)

    }
}