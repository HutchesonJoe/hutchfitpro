//add exerciserep context here, in order to get the exercises to assign to the client.

import { useContext, useEffect, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import Errors from "../Errors";

function Exercise({exercise, thisClient, clientExercises, setClientExercises, exerciseRep, setExerciseRep}){
  // const[exerciseRep, setExerciseRep] = useContext(ExerciseRepContext)
  const[errors, setErrors] = useState([])
  const[inClientRep, setInClientRep] = useState(false)

//not quite working, almost there.
  useEffect(()=>{
    if(clientExercises.includes(exercise)){
    setInClientRep(true)
    } else {
      setInClientRep(false)
    }
  },[clientExercises])

  useEffect(()=>{
    if(thisClient){
      setErrors([])
    }
  },[thisClient])

  function handleAdd(){
    setErrors([])
    if(!thisClient){
      setErrors(["No client selected"])
    } else if (clientExercises.includes(exercise)){
      setErrors(["Exercise already in client rep."]);
      setInClientRep(true)
    } else {
      setErrors([])
      setClientExercises([...clientExercises, exercise])
      fetch("/client_exercises",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          exercise_id: exercise.id, 
          client_id: thisClient.id
        })
      })
    }
  }

  return(
    <div className="exercise">
      <p className="exercise-name">{exercise.name}</p>
      <p>Category: <em>{exercise.category}</em></p>
      <p>Instructions: <em>{exercise.instructions}</em></p>
      {inClientRep ? "" : <button onClick={handleAdd}>Add to Client's Rep</button>}
      <Errors errors={errors}/>
    </div>
  )
}

export default Exercise