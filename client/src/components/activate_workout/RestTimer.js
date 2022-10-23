import { useState, useEffect } from 'react'

export const RestTimer = ({setTimerOn, setNumber, setSetNumber}) =>{
  const[seconds, setSeconds] = useState(30)

  const nextSet = () => {
    setTimerOn(false)
    setSetNumber(setNumber + 1)
  }

  let interval 
  
  useEffect(()=>{
    
    if(seconds > 0){
      interval = setTimeout(()=> setSeconds(seconds - 1), 1000)
    } else {
      nextSet()
    }

    return  () => {
      clearTimeout(interval)
      
      }
      
  },[seconds])


  return(
    <>
    <p>Rest :{seconds} seconds</p>
    <button onClick = {nextSet} >Skip Rest</button>
    </>
  )
}