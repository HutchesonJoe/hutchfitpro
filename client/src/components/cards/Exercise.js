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
      {/* <h4 onClick ={()=>setInstructionsOn(!instructionsOn)}>{instructionsOn ? "Close Instructions" : "Click for Instructions"}</h4>
      {instructionsOn ? instructions : null} */}
      <h5>current resistance level: {clientExercise.weight} lbs</h5>
      {/* {inClientRep ? null : <button onClick={handleAdd}>Add to Client's Rep</button>} */}
      {/* <Errors errors={errors}/> */}
    </div>
  )
}

export default Exercise