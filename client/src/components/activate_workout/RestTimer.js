import { useState, useEffect } from 'react'

export const RestTimer = ({nextSet, secondsLeft = 30}) => {
  const[seconds, setSeconds] = useState(secondsLeft)
  const[over, setOver] = useState(true)

  const newSet = () => {
    setSeconds(30)
    setOver(true)
    nextSet()
  }
    
  useEffect(()=>{
    let time
    if(seconds > 0){
      time = setTimeout(()=>setSeconds(seconds - 1), 1000);
    } else {
      newSet()
      clearInterval(time)
    }

  },[seconds, over])

  // const tick = () => {
  //   setSeconds(seconds - 1)
  // }

  // const reset = () => {
  //   setSeconds(30)
  //   setOver(false)
  //   nextSet()
  // }

  

  return(
    <div>
      {over ? <button onClick={()=>setOver(false)}>Complete Set</button> : <p>Rest :{seconds} seconds< button onClick = {newSet} >Skip Rest</button></p>}
    </div>
  )
}