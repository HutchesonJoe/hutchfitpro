import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import CurrentBlock from "./CurrentBlock";
import Timer2 from "./Timer2";

function ActivateWorkout({workout, endWorkout}){
  const[index, setIndex] = useState(0)
  const[currentBlock, setCurrentBlock] = useState()
  const [exerciseRep] = useContext(ExerciseRepContext)
  const [timerRendered, setTimerRendered] = useState(true)

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
    setTimerRendered(true)
    setIndex(index + 1)
  }

  return(
    <div>
      <p id="block-instructions">Complete all reps for both exercises, then take a break.</p>
     {currentBlock ? <CurrentBlock currentBlock = {currentBlock} exerciseRep = {exerciseRep} /> : null}
      {timerRendered ? <Timer2 index={index} setIndex={setIndex} setTimerRendered={setTimerRendered}/> : <button type="button" onClick={handleContinue}>Continue Workout</button>}

    </div>
  )
}

export default ActivateWorkout;
