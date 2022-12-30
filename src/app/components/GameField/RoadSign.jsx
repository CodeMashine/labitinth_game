import React, { useState, useEffect, useRef } from "react";

export default function RoadSign({ way, gameResult }) {
  const [step, setStep] = useState(0);

  const signRef = useRef("ready");

  const timerRef = useRef();

  useEffect(() => {
    if (gameResult === "in Process") {
      timerRef.current = setTimeout(() => {
        setStep(step + 1);
      }, 1000);
    }
    if (step === way.length) {
      clearTimeout(timerRef.current);
    }

    return () => {
      clearTimeout(timerRef.current);
    };



  }, [step, gameResult, way.length]);


  if (step >= way.length) {
    signRef.current = "finish";
  } else {
    signRef.current = `step ${step + 1} ${way[step]}`;
  }
  
  if(gameResult !== 'in Process'){
    signRef.current = gameResult ;
  }

  
  return (
    <div className = "text-5xl mt-[4rem] font-bold">
      {signRef.current}
    </div>
  );
}
