import React from "react";
import styles from "./scoreboard.module.css";

function ScoreBoard(){
    return(
        <div className={styles.scoreDiv}>
            <img src="/images/logo.svg" />
            <div className={styles.score}>
                <h1>SCORE</h1>
                <p>12</p>
            </div>
            
        </div>
    )
}

export default ScoreBoard;