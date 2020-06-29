import React from "react";
import styles from "./choice.module.css";

function Choice(props){

    let myStyle={};
    const myChoice = props.choice;

    if (myChoice==="rock"){
        myStyle = {
            background:"linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))"
        }
    }  else if(myChoice==="paper"){
        myStyle= {
            background:"linear-gradient(hsl(230, 89%, 62%) ,hsl(230, 89%, 65%))"
        }
    } else if(myChoice==="scissors"){
        myStyle= {
            background:"linear-gradient(hsl(39, 89%, 49%) ,hsl(40, 84%, 53%))"
        }
    }

    const imgURL = "./images/icon-" + myChoice + ".svg";

    return(
        <div className={styles.outsideCircle} style={myStyle}>
            <div className={styles.innerCircle}>
                <img src={imgURL} />
            </div>
        </div>
    )
        
}

export default Choice;