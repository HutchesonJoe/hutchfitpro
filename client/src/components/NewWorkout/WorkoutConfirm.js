import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ThisClientContext } from "../context/ThisClientContext";
import BlockConfirm from "./BlockConfirm";

function WorkoutConfirm({blockArray, workout, setConfirmOn}){
  const[thisClient] = useContext(ThisClientContext)
 
  const workoutConfirm = blockArray.map((block)=><BlockConfirm block={block} key={block.id}/>)

  function handleSendWorkout(e){
    e.preventDefault()
    const sendConfirm = window.confirm("Send this client workout?")
    if(sendConfirm){
      setConfirmOn(false)
    }
    ///what other options can I give my user if they dont want to send it? Probably need the ability to scrap the wokrout, edit, etc. 

  }

  return(
    <div>
      <h3>{workout.title}</h3>
      <h4>Confirm the resistance level for your client exercises.</h4>
      {workoutConfirm}
      <button onClick={handleSendWorkout}>Send Workout</button>
    </div>
  )
}

export default WorkoutConfirm