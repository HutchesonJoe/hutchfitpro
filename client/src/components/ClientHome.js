import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Logout from "./Logout";
import Workout from "./workout/Workout";
<<<<<<< HEAD
import { Routes, Route, useNavigate } from "react-router-dom";
import ActivateWorkout from "./ActivateWorkout";
=======
import { Routes, Route, useNavigate } from "react-router-dom"
import ActivateWorkout from "./ActivateWorkout";

>>>>>>> origin/updates

function ClientHome(){

  const [user, setUser] = useContext(UserContext)
  const [lastThree, setLastThree] = useState([])
  const [current, setCurrent] = useState()
  const [overviewOn, setOverviewOn] = useState(true)
  
  let clientWorkouts
  
  useEffect(()=>{
    if(user.workouts){
      setCurrent(user.workouts[user.workouts.length-1])
      setLastThree(user.workouts.slice(-4, -1))
    }
    
  }, [user])

  
    
  if(lastThree){
      clientWorkouts = lastThree.map((w)=><li key={w.id}>{w.title}</li>)
  }

  const navigate = useNavigate()
  
<<<<<<< HEAD
=======
  const navigate = useNavigate()
>>>>>>> origin/updates
  function handleBeginWorkout(){
    setOverviewOn(!overviewOn)
    navigate("/activateworkout")
  }
<<<<<<< HEAD

=======
>>>>>>> origin/updates

  return(
    <div id="client-home">
      
        <div id= "client-welcome">
           Hello, {user.first_name}!
        </div>

       
        <div id="client-last-three">
          <p>Last three workouts:</p>
          <ul>
            {clientWorkouts.length!==0 ? clientWorkouts : "No workouts yet."}
          </ul>
        </div>
      
        
        <div id="client-next-workout">
<<<<<<< HEAD
        <h3>Current Workout overview:</h3>
          {/* <button id="begin workout" onClick={handleBeginWorkout}>Begin Workout</button> */}
          {overviewOn ? 
          <ul>
             {current ? <Workout workout={current}/> : <li>You don't have an upcoming workout yet.</li>}
=======
          <h3>Current Workout overview:</h3>
          <button id="begin workout" onClick={handleBeginWorkout}>Begin Workout</button>
          {overviewOn ? 
          <ul>
          {current ? <Workout workout={current}/> : <li>You don't have an upcoming workout yet.</li>}
>>>>>>> origin/updates
        </ul>
          : null}
        </div>
        <Routes>
          <Route exact path="/activateworkout" element={<ActivateWorkout/>}/>
        </Routes>
      <Logout/>
  </div>
  )
}

export default ClientHome