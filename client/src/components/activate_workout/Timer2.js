import { useEffect, useState } from "react";
function Timer2({index, setIndex}){
  
  const [resting, setResting] = useState("Start :30 Rest")

  function hitTimer(){
    setResting("Resting...")
    let timer = setInterval(()=>{
      clearInterval(timer)
      setResting("Start :30 Rest")
    }, 30000)
    // 
 //this functino wants to start the timer. When the timerends, it want to reset it.
  }

  return(
    <>
    <button onClick={hitTimer} type="button">{resting}</button>
    <ContinueButton index={index} setIndex={setIndex} resting={resting}/>
    </>
  )
}

function ContinueButton({index, setIndex, resting}){
  return(
    <button type = "button" onClick={()=>setIndex(index + 1)}>{resting==="Resting..." ? "Skip Rest": "Continue Workout"}</button>
  )
}

export default Timer2;