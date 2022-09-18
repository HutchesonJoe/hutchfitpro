//add exerciserep context here, in order to get the exercises to assign to the client.

import { useContext, useEffect, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { UserContext } from "../context/UserContext";
// import Errors from "../Errors";

function Exercise({clientExercise}){
  
  const[errors, setErrors] = useState([])
  const[instructionsOn, setInstructionsOn] = useState(false)
  const[user] = useContext(UserContext)
  const[exerciseRep] = useContext(ExerciseRepContext)
  const exercise = exerciseRep.find((ex)=>ex.id===clientExercise.exercise_id)
  
  return(
    <div className="exercise">
      <p className="exercise-name">{exercise.name}</p>
      <p>Category: <em>{exercise.category}</em></p>
      <p onClick={()=>setInstructionsOn(!instructionsOn)} style={{color:"red"}}>{instructionsOn ? "Close Instructions" : "Click for Instructions"}</p>
      {instructionsOn ? exercise.instructions : null}
      <h5>current resistance level: {clientExercise.weight} lbs</h5>
      {/* <Errors errors={errors}/> */}
    </div>
  )
}

export default Exercise