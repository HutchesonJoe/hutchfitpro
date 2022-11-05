import Logout from "../Logout";
import { Greeting } from "../styles/ClientStyles"
import { useContext, useEffect, useState } from 'react'
import { UserContext } from "../context/UserContext";
import { CurrentWorkoutContext } from "../context/CurrentWorkoutContext";
export const Main = () => {
  const [user] = useContext(UserContext)
  const [newWorkouts, setNewWorkouts] = useState([])
  const [workout] = useContext(CurrentWorkoutContext)
  const newWorkoutNumber = newWorkouts.length===1 ? `a new workout` : `${newWorkouts.length} new workouts`

  useEffect(()=>{
    setNewWorkouts(user.workouts.filter((wkt)=>wkt.completed === false))
  }, [])
  
  useEffect(()=>{
    let incomplete = user.workouts.filter((workout)=>workout.completed===false)
    if(incomplete.length!==0){
      setNewWorkouts(incomplete)
    }
  },[workout])

  return (
    <>
      <Greeting>
          Hello, {user.first_name}!  <div style={{float: "right"}}><Logout /></div>
      </Greeting>
      {newWorkouts.length!==0 ?<h3>You have {newWorkoutNumber} to complete. Check the menu above. </h3> :<p>No new workouts. {user.trainer.first_name} will have one for you ASAP.</p>}
    </>
  )      
}