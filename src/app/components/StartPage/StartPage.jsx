import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDifficulty, gameOver } from "../../slices/gameOptionSlice";
import styles from "../gameStyle.module.css" ;

export default function StartPage() {
    let sideStore = useSelector(state => state.gameOption.side);
    let stepsStore = useSelector(state => state.gameOption.steps);
    const dispatch = useDispatch();
    const [side, setSide] = useState(sideStore);
    const [steps, setSteps] = useState(stepsStore);


    function handler(side, steps, setDifficulty) { 
        if (side <= 3) side = 3;
        if (steps <= 1) steps = 1;

        dispatch(setDifficulty([Number(side), Number(steps)]));
        dispatch(gameOver(false))
    }

    return <div className = {styles.startPage}>
            <h2>Задаите сложность игры</h2>
        <div>
            <span> Сторона поля(не менее 3) :
                <input value={side} onChange={(e) => setSide(e.target.value)} />
            </span>
        </div>
        <div>
            <span>
                Количество ходов (не менее 1) :
                <input value={steps} onChange={(e) => setSteps(e.target.value)} />
            </span>
            <p>Правила игры :</p>
            <p> Необходимо на поле , мысленно следуя шагам от старта (отмеченая клетка) наити финиш</p>
        </div>
        <button className = {styles.startBtn} onClick={() => handler(side, steps, setDifficulty)}>Начать</button>
    </div>
}