import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Logout from "../Logout";
import { NavLink } from "react-router-dom"
import { NavRoutes } from "../Routes";
import { Button, Greeting, NavBar } from "../Styles"




export const ClientHome = () => {

  const [user] = useContext(UserContext)
  const [workout, setWorkout] = useState()
  const [activateOn, setActivateOn] = useState(false)
  const [workoutComplete, setWorkoutComplete] = useState(false)
  const [trainerName, setTrainerName] = useState("Your trainer")

  useEffect(()=>{
    if(user){
      const newWorkouts = user.workouts.filter((workout)=>workout.completed===false)
      setWorkout(user.workouts[user.workouts.length - 1])
      setTrainerName(user.trainer.first_name)
    }
  },[user])

  let NewOrCurrent

  if(workout && workout.completed){
    NewOrCurrent = "Current"
  } else {
    NewOrCurrent = "New"
  }
 
  return(
    <div id="client-home">
        <NavBar>
          {/* <NavLink to='clienthome'><Button>Home</Button></NavLink> */}
          <NavLink to='workouthistory'><Button navbar>Workout History</Button></NavLink>
          <NavLink to='nextworkout'><Button navbar>{NewOrCurrent} Workout</Button></NavLink>
        </NavBar>
        
        <br/>
        {activateOn ? null :
       <>
          <Greeting>
            Hello, {user.first_name}!  <div style={{float: "right"}}><Logout /></div>
          </Greeting>
          <p>{user.workouts[user.workouts.length - 1].completed ? `No new workouts. ${user.trainer.first_name} will have one for you ASAP.` :`You have a new workout to compete.`}</p>
       </>
        }
        <NavRoutes/>
  </div>
  )
}
