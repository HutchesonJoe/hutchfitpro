
import { useContext, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { ExerciseName, Instructions, Card } from '../styles/WorkoutStyles'
// import Errors from "../Errors";

function Exercise({clientExercise}){
  const[instructionsOn, setInstructionsOn] = useState(false)
  const[exerciseRep] = useContext(ExerciseRepContext)
  const exercise = exerciseRep.find((ex)=>ex.id===clientExercise.exercise_id)
  
  return(
    <Card>
      <ExerciseName>{exercise.name}</ExerciseName>
      <p onClick={()=>setInstructionsOn(!instructionsOn)} style={{color:"red"}}>{instructionsOn ? "Close Instructions" : "Click for Instructions"}</p>
      <Instructions>{instructionsOn ? exercise.instructions : null}</Instructions>
      <h5>Your current resistance level: {clientExercise.weight} lbs</h5>
      <Instructions>Category: <em>{exercise.category}</em></Instructions>
    </Card>
  )
}

export default Exercise