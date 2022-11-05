import { useState, useEffect } from 'react';
import { Timer } from '../styles/WorkoutStyles'

export const RestTimer = ({setNumber, setSetNumber, secondsLeft = 30}) => {
  const[seconds, setSeconds] = useState(secondsLeft)
  const[timerOn, setTimerOn] = useState(false)
  
  let time
  
  const newSet = () => {
    setSeconds(30)
    clearTimeout(time)
    setTimerOn(false)
    setSetNumber(setNumber + 1)
  }
    
  useEffect(()=>{
    
    if(seconds > 0 && timerOn){
      time = setTimeout(()=>setSeconds(seconds - 1), 1000);
    } else if (seconds === 0){
      newSet()
    }

  },[seconds, timerOn])

  return(
    <Timer>
      {!timerOn ? <button onClick={()=>setTimerOn(true)}>Complete Set</button> : <p>Rest :{seconds} seconds< button onClick = {newSet} >Skip Rest</button></p>}
    </Timer>
  )
}