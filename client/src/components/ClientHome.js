import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Logout from "./Logout";
import Workout from "./workout/Workout";

function ClientHome(){

  const [user, setUser] = useContext(UserContext)
  const [lastThree, setLastThree] = useState([])
  const [current, setCurrent] = useState()
  
  let clientWorkouts
  let lastWorkout 
  
  useEffect(()=>{
    if(user.workouts){
      
      setCurrent(user.workouts[user.workouts.length-1])
      clientWorkouts = user.workouts.slice(-4, -1).map((w)=>{
        return (
          <li key={w.id}>{w.title}</li>
        )
      })
    }
  }, [user])

  return(
    <div>
      <div>
        <p id="client-welcome">Hello, {user.name}!</p>
        <p>Last three workouts:</p>
        <ul>
          {clientWorkouts}
        </ul>
        <p>Here, you should be able to:</p>
        <ul>
          <li>View upcoming workout.</li>
          {current ? <Workout workout={current}/> : null}
          <li>Quickly see where your weight range is for each exercise.</li>
          <li>Log a workout: record resistance level; take a note.</li>
          <li>Request a new workout?</li>
          <li>* Create your own workout.</li>
        </ul>
      </div>
      <Logout/>
    </div>
  )
}

export default ClientHome