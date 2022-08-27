import { useEffect, useContext, useState } from "react"
import { ThisClientContext } from "../context/ThisClientContext";
import BlockConfirm from "./BlockConfirm";

function WorkoutConfirm({blockArray, workout}){

 
  const[thisClient] = useContext(ThisClientContext)
  console.log(thisClient.client_exercises)
  console.log(workout)
  // useEffect(()=>{
  //   fetch(`/workouts/${workout.id}`)
  //     .then(r=>r.json())
  //     .then(data=>setWorkoutConfirm(data))
  // },[])

  // useEffect(()=>{
  //   if(workoutConfirm){
  //     setClientExercises()
  //   }
  // },[workoutConfirm])
  

  const workoutConfirm = blockArray.map((block)=><BlockConfirm block={block} key={block.id}/>)

  return(
    <div>
      <h3>{workout.title}</h3>

      {workoutConfirm}
    </div>
  )
}

export default WorkoutConfirm