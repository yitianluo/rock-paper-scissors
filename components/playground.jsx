import React from "react";
import styles from "./playground.module.css";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

function PlayGround(props){

    function handleChoose(event){
        const choice = event.target.getAttribute('name');
        console.log(choice);
        props.playerChoose(choice);
    }

    return(
        <div className={styles.playground}>
        <div className={styles.pattern}>
            <div className={styles.paper} name="paper" onClick={handleChoose}>
                <div className={styles.innerCircle} name="paper">
                    <img src="/images/icon-paper.svg" name="paper"></img>
                </div>  
            </div>

            <div className={styles.scissors} name="scissors" onClick={handleChoose}>
                <div className={styles.innerCircle} name="scissors">
                    <img src="/images/icon-scissors.svg" name="scissors"></img>
                </div>
            </div>

            <img src="/images/bg-triangle.svg" className={styles.triangle}></img>

            <div className={styles.rock} name="rock" onClick={handleChoose}>
                <div className={styles.innerCircle} name="rock">
                    <img src="/images/icon-rock.svg" name="rock"></img>
                </div>   
            </div>
        </div>
        </div>
    );
}

export default PlayGround;