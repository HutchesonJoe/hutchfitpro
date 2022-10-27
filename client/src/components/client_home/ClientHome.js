import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Logout from "../Logout";
import { NavLink } from "react-router-dom"
import { NavRoutes } from "../Routes";
import { CurrentWorkoutContext } from "../context/CurrentWorkoutContext";


export const ClientHome = () => {

  const [user] = useContext(UserContext)
  const [activateOn, setActivateOn] = useState(false)
  const [workoutComplete, setWorkoutComplete] = useState(false)
  const workout = useContext(CurrentWorkoutContext) 
  
 

  return(
    <div id="client-home">
      
       {activateOn ? null :
       <>
          <div id= "client-welcome">
            Hello, {user.first_name}!  <div style={{float: "right"}}><Logout /></div>
          <p>{user.workouts[user.workouts.length - 1].completed ? null :`You have a new workout to compete.`}</p>
          </div>
         
       </>
        }
        
        <NavLink to='clienthome'>Home</NavLink>
        <NavLink to='workouthistory'>Workout History</NavLink>
        <NavLink to='nextworkout'>Complete Next Workout</NavLink>
        
        <NavRoutes/>
        
        {workoutComplete ? <div>Congrats, {user.first_name}! Well done. Your trainer will have another workout for you soon. </div> : null}
        
        <br/>
      
  </div>
  )
}
