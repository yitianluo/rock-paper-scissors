import Head from 'next/head'
import ScoreBoard from '../components/scoreboard'
import PlayGround from '../components/playground';
import RuleBoard from "../components/ruleboard";
import DisplayBoard from "../components/displayboard";

import { useState,useEffect } from 'react';


function Home() {

  const [isRule,setIsRule] = useState(false);
  const [isPlay,setIsPlay] = useState(true);
  const [isDisplay,setIsDisplay] = useState(false);
  const [gestureChoice,setGestureChoice] = useState(""); 
  const [computerChoice,setComputerChoice] = useState("");
  const [score,setScore] = useState(typeof window !== 'undefined' && localStorage.getItem("myScoreLocal")? localStorage.getItem("myScoreLocal"):12);


  useEffect(() => {
    localStorage.setItem('myScoreLocal', score);
  }, [score]);

  function handleRule(){
    console.log(isRule);
    setIsRule(prev => !prev);
  }
  
  function playerChoose(choice){
    const choices = ["paper","rock","scissors"];
    const index = Math.floor(Math.random()*3);
    const computerC = choices[index];
    setIsPlay(false);
    setIsDisplay(true);
    setGestureChoice(choice);
    setComputerChoice(computerC);
  }

  function playAgain(){
    setIsPlay(true);
    setIsDisplay(false);
  }

  function changeScore(addPoint){
    setScore(prev => Number(prev)+addPoint);
  }

  return (
    <div>
      <Head>
        <title>Rock,paper & Scissor</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet"></link>
      </Head>
      
      <ScoreBoard score={score}/>
      { isPlay && <PlayGround playerChoose={playerChoose} />}
      { isDisplay && <DisplayBoard choice={gestureChoice} computerChoice={computerChoice} 
      playAgain={playAgain} changeScore={changeScore} />}

      { isRule && <RuleBoard handleRule={handleRule}/>}

      <div className="ruleButton" onClick={handleRule}>
        RULES
      </div>

    </div>
  )
}

export default Home;