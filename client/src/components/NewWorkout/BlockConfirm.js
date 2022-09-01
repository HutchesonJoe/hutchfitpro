import { useState, useContext, useEffect } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { ThisClientContext } from "../context/ThisClientContext";

function BlockConfirm({block}){
  const[thisClient] = useContext(ThisClientContext)
  const[clientExArr, setClientExArr] = useState([])
  const[exerciseRep] = useContext(ExerciseRepContext)
  console.log(clientExArr)
  console.log(exerciseRep)
  useEffect(()=>{
    let arr = [] 

    block.workout_exercises.map((ex)=>{
      const exercise = thisClient.client_exercises.find((x)=>x.exercise_id===ex.exercise_id)
      
      if(exercise){
        arr.push(exercise)
      } else {
        const newExercise = {
          client_id : thisClient.id,
          exercise_id : ex.exercise_id
        }
        console.log(newExercise)
        fetch('/client_exercises',{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newExercise)
        })
        .then(r=>r.json())
        .then((newEx)=>{
         arr.push(newEx)
        })
      }
    })
    setClientExArr(arr)
  },[])
  
  
  //take the block of selected exercises
  //for each workout_exercise, look for that exercise in the client_exercises
  //if (the exercise had been previously assigned)
  //get the info for that client_exercise, push to clientExerciseArr
  //if NOT(else)
  //create a new client_exercise, push to clientExerciseArr

  //take clientExerciseArray
  //get exercise title, resistance level
  //give option to set or change resistance level


  const clientExercisesBlock = clientExArr.map((ex)=>{
    const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)

    return(
      <li key={ex.id}>{exercise.name}</li>
    )
  })

  return(
    <div>
      {clientExercisesBlock}
    </div>
  )
}

export default BlockConfirm