import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import CurrentBlock from "./CurrentBlock";

function ActivateWorkout({workout, endWorkout}){
  const[index, setIndex] = useState(0)
  const[currentBlock, setCurrentBlock] = useState()
  const [exerciseRep] = useContext(ExerciseRepContext)
  const [timerStarted, setTimerStarted] = useState(false)

  useEffect(()=>{
    if(workout && workout.blocks){
      setCurrentBlock(workout.blocks[index])
      if(workout.blocks.length===index){
        endWorkout()
       //fetch to mark workout complete
      }
    }
  },[workout, index])

  function handleContinue(){
    setTimerStarted(true)
    setIndex(index + 1)
  }

  return(
    <div>
      <p id="block-instructions">Complete all reps for both exercises, then take a break.</p>
     {currentBlock ? <CurrentBlock currentBlock = {currentBlock} exerciseRep = {exerciseRep} setTimerStarted = {setTimerStarted} /> : null}
    </div>
  )
}

export default ActivateWorkout;
