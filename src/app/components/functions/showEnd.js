import styles from "../gameStyle.module.css" ;


export default function showEnd(num){
    let result = document.getElementById(num) ;
    result.className = `${styles.end}` ;
    console.log(result) ;
}