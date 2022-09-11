//add exerciserep context here, in order to get the exercises to assign to the client.

import { useContext, useEffect, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { UserContext } from "../context/UserContext";
// import Errors from "../Errors";

function Exercise({exercise}){
  //errors
  const[errors, setErrors] = useState([])
  const[instructionsOn, setInstructionsOn] = useState(false)
  const[user] = useContext(UserContext)
  const[exerciseRep] = useContext(ExerciseRepContext)
  
  let exer 
  if(exercise.client_id){
    exer = exerciseRep.find((ex)=>ex.id===exercise.exercise_id)
  } else {exer = exercise}

  const instructions = <p>Instructions: <em>{exer.instructions}</em></p>
  
  return(
    <div className="exercise">
      <p className="exercise-name">{exer.name}</p>
      {/* <p>Category: <em>{exer.category}</em></p> */}
      <h4 onClick ={()=>setInstructionsOn(!instructionsOn)}>{instructionsOn ? "Close Instructions" : "Click for Instructions"}</h4>
      {instructionsOn ? instructions : null}
      <h5>current resistance level: {exercise.weight} lbs</h5>
      {/* {inClientRep ? null : <button onClick={handleAdd}>Add to Client's Rep</button>} */}
      {/* <Errors errors={errors}/> */}
    </div>
  )
}

export default Exercise