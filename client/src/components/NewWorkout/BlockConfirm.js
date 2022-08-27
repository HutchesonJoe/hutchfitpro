import { useState, useContext, useEffect } from "react";
import { ThisClientContext } from "../context/ThisClientContext";

function BlockConfirm({block}){
  const[thisClient] = useContext(ThisClientContext)
  const[clientExArr, setClientExArr] = useState([])
  //need to reeset this component with a state call in order to make this work. So maybe we are 
  console.log(clientExArr)
  useEffect(()=>{
    block.workout_exercises.map((ex)=>{
      const exercise = thisClient.client_exercises.find((x)=>x.exercise_id===ex.exercise_id)
      if(exercise){
        setClientExArr([...clientExArr, exercise])
      } else {
        const newExercise = {
          client_id : thisClient.id,
          exercise_id : ex.exercise_id
        }
        fetch('/client_exercises',{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newExercise)
        })
        .then(r=>r.json())
        .then(newEx=>setClientExArr(newEx))
      }
    })

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
    return(
      <li key={ex.id}>Hello</li>
    )
  })

  return(
    <div>
      {clientExercisesBlock}
    </div>
  )
}

export default BlockConfirm