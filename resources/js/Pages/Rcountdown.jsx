import React , {useState} from "react";
import { useTimer } from "react-timer-hook";
import Mytimer from "./Mytimer";
import Countform from "./Countform";

export default function Rcountdown(){
      const time = new Date();
      const [countdownTime, setCountdownTime] = useState(0);
      const [chengeDisplay, setChengeDisplay] = useState(true);
  time.setSeconds(time.getSeconds() + countdownTime); 
  console.log(countdownTime);
  return (
    <div> 
    <button onClick={e =>setChengeDisplay(!chengeDisplay)}>chenge</button>
      {chengeDisplay ? ( <Mytimer expiryTimestamp={time} />): (<Countform countdownTime={countdownTime} setCountdownTime={setCountdownTime}/>)} 
    </div>
  );
}