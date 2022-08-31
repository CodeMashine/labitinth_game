import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusCircleIcon, MinusCircleIcon , PlayIcon } from '@heroicons/react/outline'

import {changeSide,changeSteps, gameOver } from "../../slices/gameOptionSlice";
import styles from "../gameStyle.module.css";

export default function StartPage() {
    let sideStore = useSelector(state => state.gameOption.side);
    let stepsStore = useSelector(state => state.gameOption.steps);
    const dispatch = useDispatch();

    return <div className="flex flex-col mx-auto w-6/12 mt-10 ">
            
            {/* <h2 className ="font-semibold text-2xl font-sans">Добро пожаловать в игру для развития памяти и внимания</h2> */}
            <h2 className ="font-semibold text-2xl font-sans tracking-widest">Лабиринт</h2>

        <div className = "mt-3">
        <h2 className ="text-xl font-sans tracking-widest underline">Задайте сложность игры</h2>

            <div className = "mt-3">
            <span className = "flex space-x-4 items-center">
                    <span className="cursor-help" title="(не менее 3 и не более 15)">
                    Сторона поля :
                    </span>
                    {/* <button className="rounded-lg border ring-inset-2 ring-1 bg-teal-500 w-4 h-4"  */}
                    {/* <button className="rounded-full border ring-inset-2 ring-1 bg-teal-500 w-6 h-6"  */}
                    {/* onClick = {()=>dispatch(changeSide("decrease"))} >-</button> */}
                    {/* <button className="rounded-full w-5 h-5 bg-secondary text-base-100 mx-2" */}
                    <button className="rounded-full w-5 h-5"
                    onClick = {()=>dispatch(changeSide("decrease"))}>
                    <MinusCircleIcon />
                    </button>
                    <span>{sideStore}</span>
                    <button className="rounded-full w-5 h-5" 
                    onClick = {()=>dispatch(changeSide("increase"))} >
                         <PlusCircleIcon /> 
                         </button>
                </span>
            </div>
            <div>
                <span className = "flex space-x-4 items-center">
                    <span className="cursor-help"  title="(не менее 1 и не более 15)">
                    Количество ходов :
                    </span>
                    <button className="rounded-full w-5 h-5" 
                    onClick = {()=>dispatch(changeSteps("decrease"))}>
                    <MinusCircleIcon />
                        </button>
                    <span>{stepsStore}</span>
                    <button className="rounded-full w-5 h-5" 
                    onClick = {()=>dispatch(changeSteps("increase"))}>
                         <PlusCircleIcon />
                        </button>
                </span>
            </div>
        </div>
        {/* <button className={styles.startBtn} onClick={() => handler(side, steps, setDifficulty)}>Начать</button> */}
        <button className="rounded border-2 border-black w-20 my-3"
        onClick={() => dispatch(gameOver(false))}>
            Начать
            </button>
            
            
            <div>
            <ul className = "list-none hover:list-disc">Правила игры :</ul>
            <li> Необходимо на поле , мысленно следуя инструкциям , передвигаться из клетки старта (отмеченая клетка) к финишу</li>
            <li> После последней инструкции выбрать клетку финиш</li>

            </div>
    </div>
}