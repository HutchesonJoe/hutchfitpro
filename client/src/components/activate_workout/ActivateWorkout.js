import { useEffect, useState } from "react";
import { useContext } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { useNavigate } from "react-router-dom"
import CurrentBlock from "./CurrentBlock";
import Timer2 from "./Timer2";

function ActivateWorkout({workout}){
  const[index, setIndex] = useState(0)
  const[currentBlock, setCurrentBlock] = useState()
  const [exerciseRep] = useContext(ExerciseRepContext)
  
  const navigate = useNavigate()

  useEffect(()=>{
    if(workout && workout.blocks){
      setCurrentBlock(workout.blocks[index])
      if(workout.blocks.length===index){
        console.log("done")
        navigate(-2)
      }
    }
  },[workout, index])

  return(
    <div>
      <p>Complete all reps for both exercises, then take a break.</p>
     {currentBlock ? <CurrentBlock currentBlock = {currentBlock} exerciseRep = {exerciseRep} /> : null}
      <Timer2 index={index} setIndex={setIndex}/>
    </div>
  )
}

export default ActivateWorkout;
