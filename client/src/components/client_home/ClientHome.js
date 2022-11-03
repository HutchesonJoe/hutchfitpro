import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import { NavLink } from "react-router-dom"
import { NavRoutes } from "../Routes";
import { Button, NavBar, ClientWindow} from "../styles/ClientStyles"




export const ClientHome = () => {

  const [user] = useContext(UserContext)
  const [workout, setWorkout] = useState()
  const [activateOn, setActivateOn] = useState(false)
  const [trainerName, setTrainerName] = useState("Your trainer")

  

  useEffect(()=>{
    if(user){
      
      setWorkout(user.workouts[user.workouts.length - 1])
      // setTrainerName(user.trainer.first_name)
    }
  },[user])

  let NewOrCurrent

  if(workout && workout.completed){
    NewOrCurrent = "Current"
  } else {
    NewOrCurrent = (<div style={{color: "red"}}>&#9734; New</div> )
  }
 
  return(
    <div id="client-home">
        <NavBar>
          <NavLink to='/'><Button navbar>Home</Button></NavLink>
          <NavLink to='workouthistory'><Button navbar>Workout History</Button></NavLink>
          <NavLink to='nextworkout'><Button navbar> {NewOrCurrent} Workout</Button></NavLink>
        </NavBar>
        
        <br/>
        <ClientWindow>
            <NavRoutes/>
        </ClientWindow>
       
  </div>
  )
}
