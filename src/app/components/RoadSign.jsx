import React, { useState } from "react";

export default function RoadSign(props) {
    let way = props.way;
    const [counter, setCounter] = useState(1);
    const [sign, setSign] = useState('ready');
    let timer = setTimeout(() => {
        setSign(` step ${counter} ${way[counter - 1]}`);
        setCounter(counter + 1);
    }, 1000);

    if (counter === way.length + 1) {
        clearTimeout(timer);
    }

    return (<div>
        {sign}
    </div>)
}