import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

import {
  changeSide,
  changeSteps,
  gameOver,
} from "../../slices/gameOptionSlice";

export default function StartPage() {
  let sideStore = useSelector((state) => state.gameOption.side);
  let stepsStore = useSelector((state) => state.gameOption.steps);
  const dispatch = useDispatch();

  const [listVisible, setListVisible] = useState(false);

  return (
    <div className="flex items-start flex-col mx-auto w-[100%] h-[100%] pt-[20rem]  ">

      <h2 className="font-bold text-8xl font-sans tracking-widest">Лабиринт</h2>



{/* settings block */}
      <div className="mt-[5rem] w-[100%]">
        <h2 className="text-5xl font-sans tracking-widest underline">
          Задайте сложность игры
        </h2>


{/* сторона поля */}
        {/* <div className="mt-[3rem]"> */}
          <div className="flex mt-[3rem] justify-between  items-center">
            <span
              className="cursor-help text-5xl"
              title="(не менее 3 и не более 15)"
            >
              Сторона поля :
            </span>


            {/* button block */}
            <div className = "flex items-center justify-between w-[38%]">
            <button
              className="rounded-full w-[5rem] h-[5rem]"
              onClick={() => dispatch(changeSide("decrease"))}
              >
              <MinusCircleIcon />
            </button>
            <span className="text-5xl">{sideStore}</span>
            <button
              className="rounded-full w-[5rem] h-[5rem]"
              onClick={() => dispatch(changeSide("increase"))}
              >
              <PlusCircleIcon />
            </button>
            </div>
        </div>
      {/* </div> */}

{/* количество ходов */}
<div className="flex mt-[3rem] justify-between  items-center">
            <span
              className="cursor-help text-5xl"
              title="(не менее 1 и не более 15)"
            >
              Количество ходов :
            </span>

{/* button block */}
         <div className = "flex items-center justify-between w-[38%]">
            <button
              className="rounded-full w-[5rem] h-[5rem]"
              onClick={() => dispatch(changeSteps("decrease"))}
            >
              <MinusCircleIcon />
            </button>
            <span className="text-5xl">{stepsStore}</span>
            <button
              className="rounded-full w-[5rem] h-[5rem]"
              onClick={() => dispatch(changeSteps("increase"))}
            >
              <PlusCircleIcon />
            </button>
          </div>
        </div>
      </div>

      {/* start button */}
      <button
        className="rounded text-6xl  border-[10px] border-black w-[100%] h-[6rem]  mt-[7rem] "
        onClick={() => dispatch(gameOver(false))}
      >
        Начать
      </button>

      <div>
        <ul className="flex items-center text-4xl mt-[4rem]">
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
            <li className="text-3xl">
              Необходимо на поле , мысленно следуя инструкциям , передвигаться
              из клетки старта (отмеченая клетка) к финишу
            </li>
            <li className="text-3xl">
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
