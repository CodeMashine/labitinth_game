import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";


import SvgOut from "../../images/SvgOut";
import displayWidth from "../functions/displayWidth";

import {
  changeSide,
  changeSteps,
  gameOver,
} from "../../slices/gameOptionSlice";

import logo from "../../images/labyrinth.svg" ;


export default function StartPage() {
  let sideStore = useSelector((state) => state.gameOption.side);
  let stepsStore = useSelector((state) => state.gameOption.steps);
  const dispatch = useDispatch();

  const [listVisible, setListVisible] = useState(false);

  const moreThan1200 = displayWidth() ;

  const circleBtnClass = "rounded-full w-[5rem] h-[5rem] lg:w-[3rem] lg:h-[3rem]" ;


  return (
    <div className="flex items-start flex-col mx-auto w-[100%] h-[100%] pt-[20rem] lg:pt-[2rem] ">
      <div className = 'flex items-center w-[80%] justify-between lg:flex-col-reverse lg:mx-auto lg:w-full' >
        <h2 className="font-bold text-8xl font-sans tracking-widest lg:text-[7rem] lg:tracking-[4rem]">Лабиринт 
        </h2>
        { moreThan1200? <SvgOut path={logo} h={80} w={80}/> 
            
            : <SvgOut className="lg:h-[10rem]" path={logo} w={80} h={80}/>  }
      </div>



{/* settings block */}
      <div className="mt-[5rem] w-[100%]">
        <h2 className="text-5xl font-sans tracking-widest underline  lg:text-3xl">
          Задайте сложность игры
        </h2>


{/* сторона поля */}
          <div className="flex mt-[3rem] justify-between items-center lg:mt-[1rem] lg:w-[40%]">
            <span
              className="cursor-help text-5xl lg:text-3xl"
              title="(не менее 3 и не более 15)"
            >
              Сторона поля :
            </span>


            {/* button block */}
            <div className = "flex items-center justify-between w-[38%]">
            <button
              className={circleBtnClass}
              onClick={() => dispatch(changeSide("decrease"))}
              >
              <MinusCircleIcon />
            </button>
            <span className="text-5xl lg:text-3xl">{sideStore}</span>
            <button
              className={circleBtnClass}
              onClick={() => dispatch(changeSide("increase"))}
              >
              <PlusCircleIcon />
            </button>
            </div>
        </div>

{/* количество ходов */}
<div className="flex mt-[3rem] justify-between  items-center lg:mt-[1rem] lg:w-[40%]">
            <span
              className="cursor-help text-5xl lg:text-3xl"
              title="(не менее 1 и не более 15)"
            >
              Количество ходов :
            </span>

{/* button block */}
         <div className = "flex items-center justify-between w-[38%]">
            <button
              className={circleBtnClass}
              onClick={() => dispatch(changeSteps("decrease"))}
            >
              <MinusCircleIcon />
            </button>
            <span className="text-5xl lg:text-3xl">{stepsStore}</span>
            <button
              className={circleBtnClass}
              onClick={() => dispatch(changeSteps("increase"))}
            >
              <PlusCircleIcon />
            </button>
          </div>
        </div>
      </div>

      {/* start button */}
      <button
        className="rounded text-6xl  border-[10px] border-black w-[100%] h-[6rem]  mt-[7rem] lg:mt-[3rem] lg:w-[40%] lg:text-4xl "
        onClick={() => dispatch(gameOver(false))}
      >
        Начать
      </button>


{/* gameRules */}
      <div>
        <ul className="flex items-center text-4xl mt-[4rem] lg:text-2xl">
          Правила игры
          <button
            onClick={() => setListVisible(!listVisible)}
            className="ml-2 w-4 h-4"
          >
            <ChevronDownIcon />
          </button>
        </ul>
        {listVisible ? (
          <>
            <li className="text-3xl lg:text-2xl">
              Необходимо на поле , мысленно следуя инструкциям , передвигаться
              из клетки старта (отмеченая клетка) к финишу
            </li>
            <li className="text-3xl lg:text-2xl">
              После последней инструкции выбрать клетку финиш
            </li>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
