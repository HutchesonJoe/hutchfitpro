import { useEffect, useState } from "react";
function Timer2({setTimerRendered}){
  
  const [resting, setResting] = useState("Start :30 Rest")
  const [timerOn, setTimerOn] = useState(false)

  function hitTimer(){
    setResting("Resting...")
    setTimerOn(true)
    let timer = setInterval(()=>{
      clearInterval(timer)
      setTimerRendered(false)
    }, 30000)
    // 
 //this functino wants to start the timer. When the timerends, it want to reset it.
  }

  return(
    <>
    <button onClick={hitTimer} type="button">{resting}</button>
    </>
  )
}

// function ContinueButton({index, setIndex, timerOn, setResting, resting}){
//   function handleClick(){
//     setTimerOn(!timerOn)
//     setIndex(index + 1)
//     setResting("Resting (click to skip")
//   }
//   return(
//     <button type = "button" onClick={handleClick}>{resting}</button>
//   )
// }

export default Timer2;