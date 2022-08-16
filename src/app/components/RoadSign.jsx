import React from "react";
import { useSelector } from "react-redux";
import  { nanoid }  from "nanoid";

export default function RoadSign(){
    let way = useSelector(state=>state.way) ;



    return(<div>
        {way.map(item=>{
            return <p key={nanoid()}>{item}</p>
        })}
    </div>)
}