import React, { useState, useEffect } from "react";
import Choice from "../components/choice";
import styles from "./displayboard.module.css";

function DisplayBoard(props){
    
    const [computerDisplay,setComputerDisplay] = useState(false);
    const [showResult,setShowResult] = useState(false);
    const [resultText,setResultText] = useState("");

    useEffect(() =>{
        const first = setTimeout(handleComputerDisplay,1000);

        function handleComputerDisplay(){
            setComputerDisplay(true);
            const second = setTimeout(handleResultDisplay,1000);
            return () => clearTimeout(second);
        }

        function handleResultDisplay(){
        
            setShowResult(true);
    
            if(props.choice==="rock"){
                if(props.computerChoice==="rock"){
                    setResultText("DRAW");
                    props.changeScore(0);
                } else if(props.computerChoice==="scissors"){
                    setResultText("YOU WIN");
                    props.changeScore(1);
                } else if(props.computerChoice==="paper"){
                    setResultText("YOU LOSE");
                    props.changeScore(-1);
                }
            } else if(props.choice==="paper"){
                if(props.computerChoice==="rock"){
                    setResultText("YOU WIN");
                    props.changeScore(1);
                } else if(props.computerChoice==="scissors"){
                    setResultText("YOU LOSE");
                    props.changeScore(-1);
                } else if(props.computerChoice==="paper"){
                    setResultText("DRAW");
                    props.changeScore(0);
                }
            } else if(props.choice==="scissors"){
                if(props.computerChoice==="rock"){
                    setResultText("YOU LOSE");
                    props.changeScore(-1);
                } else if(props.computerChoice==="scissors"){
                    setResultText("DRAW");
                    props.changeScore(0);
                } else if(props.computerChoice==="paper"){
                    setResultText("YOU WIN");
                    props.changeScore(1);
                }
            }

            
        }
        return () => clearTimeout(first);
    },[]);

    return(
        <div className={styles.outbox}>
            <div className={styles.displayBoard}>
                <div className={styles.myChoice}>
                    <h1>YOU PICKED</h1>
                    <Choice choice={props.choice}/>
                </div>

                {showResult &&
                <div className={styles.resultDiv}>
                    <h1>{resultText}</h1>
                    <div className={styles.replay} onClick={props.playAgain}>
                        PLAY AGAIN
                    </div>
                </div>}

                <div className={styles.computerChoice}>
                <h1>THE HOUSE PICKED</h1>
                {computerDisplay && <Choice choice={props.computerChoice}/>}
            </div>            
            </div>
        </div>
    )
}

export default DisplayBoard;