import Head from 'next/head'
import ScoreBoard from '../components/scoreboard'
import PlayGround from '../components/playground';
import RuleBoard from "../components/ruleboard";
import { useState } from 'react';

export default function Home() {

  const [isRule,setIsRule] = useState(false);

  function handleRule(){
    console.log(isRule);
    setIsRule(prev => !prev)
  }
  

  return (
    <div>
      <Head>
        <title>Rock,paper & Scissor</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet"></link>
      </Head>
      
      <ScoreBoard />
      <PlayGround />

      { isRule && <RuleBoard handleRule={handleRule}/>}

      <div className="ruleButton" onClick={handleRule}>
        RULES
      </div>

    </div>
  )
}
