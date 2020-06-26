import React from "react";
import styles from "./playground.module.css";

function PlayGround(){
    return(
        <div className={styles.playground}>
        <div className={styles.pattern}>
            <div className={styles.paper}>
                <div className={styles.innerCircle}>
                    <img src="/images/icon-paper.svg"></img>
                </div>  
            </div>

            <div className={styles.scissors}>
                <div className={styles.innerCircle}>
                    <img src="/images/icon-scissors.svg"></img>
                </div>
            </div>

            <img src="/images/bg-triangle.svg" className={styles.triangle}></img>

            <div className={styles.rock}>
                <div className={styles.innerCircle}>
                    <img src="/images/icon-rock.svg"></img>
                </div>   
            </div>
        </div>
        </div>
    );
}

export default PlayGround;