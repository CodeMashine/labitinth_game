import { HandySvg } from 'handy-svg' ;

export default function SvgOut( {path , w = 50 , h = 50}) {
   return  <HandySvg
        src={path}
        // className=""
        width = {w}
        height= {h}
    />
};