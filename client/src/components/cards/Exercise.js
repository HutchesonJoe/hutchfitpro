
import { useContext, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { ExerciseName, Instructions, ExerciseCard, RepsAndSets } from '../styles/WorkoutStyles'
// import Errors from "../Errors";

function Exercise({clientExercise}){
  const[instructionsOn, setInstructionsOn] = useState(false)
  const[exerciseRep] = useContext(ExerciseRepContext)
  const exercise = exerciseRep.find((ex)=>ex.id===clientExercise.exercise_id)
  
  return(
    <ExerciseCard>
      <ExerciseName>{exercise.name}</ExerciseName>
      <Instructions>{instructionsOn ? exercise.instructions : null}</Instructions>
      <RepsAndSets>Your current resistance level: {clientExercise.weight} lbs</RepsAndSets>
      <Instructions>Category: <em>{exercise.category}</em></Instructions>
      <Instructions onClick={()=>setInstructionsOn(!instructionsOn)} style={{color:"red"}}>{instructionsOn ? "Close Instructions" : "Click for Instructions"}</Instructions>
    </ExerciseCard>
  )
}

export default Exercise