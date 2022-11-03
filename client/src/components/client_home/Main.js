import Logout from "../Logout";
import { Greeting } from "../styles/ClientStyles"
import { useContext } from 'react'
import { UserContext } from "../context/UserContext";
export const Main = () => {
  const [user] = useContext(UserContext)

  const newWorkouts = user.workouts.filter((workout)=>workout.completed===false)
  const lastWorkout = user.workouts[user.workouts.length - 1]
  const newWorkoutNumber = newWorkouts.length===1 ? `a new workout` : `${newWorkouts.length} new workouts.`
  
 
  return (
    <>
      <Greeting>
          Hello, {user.first_name}!  <div style={{float: "right"}}><Logout /></div>
      </Greeting>
      {newWorkouts.length!==0 ?<h3>You have {newWorkoutNumber} to complete. Check the menu above. </h3> :<p>No new workouts. {user.trainer.first_name} will have one for you ASAP.</p>}
    </>
  )      
}