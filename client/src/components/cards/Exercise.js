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
      <p onClick={()=>setInstructionsOn(!instructionsOn)} style={{color:"red"}}>{instructionsOn ? "Close Instructions" : "Click for Instructions"}</p>
      {instructionsOn ? exer.instructions : null} 
      <h5>current resistance level: {exercise.weight} lbs</h5>
      {/* <Errors errors={errors}/> */}
    </div>
  )
}

export default Exercise