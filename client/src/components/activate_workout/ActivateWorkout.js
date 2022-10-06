import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { UserContext } from "../context/UserContext";
import CurrentBlock from "./CurrentBlock";
import Timer from "./Timer"

function ActivateWorkout({workout}){
  
  let index = 0
  const[currentBlock, setCurrentBlock] = useState()
  const [exerciseRep] = useContext(ExerciseRepContext)
  useEffect(()=>{
    if(workout && workout.blocks){
      setCurrentBlock(workout.blocks[index])
    }
  },[workout, index])

  function startTimer(){
    console.log("start timer")
  }
  return(
    <div>
     {currentBlock ? <CurrentBlock currentBlock = {currentBlock} exerciseRep = {exerciseRep} /> : null}
      {/* <br/>
      <button onClick={startTimer}>Rest</button> */}
      <Timer/>
    </div>
  )
}

export default ActivateWorkout;
