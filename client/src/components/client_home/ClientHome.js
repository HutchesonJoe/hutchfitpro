import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Logout from "../Logout";
import Workout from "../workout/Workout";
import { Routes, Route, Link } from "react-router-dom"
import ActivateWorkout from "../activate_workout/ActivateWorkout";
import WorkoutHistory from "./WorkoutHistory"


function ClientHome(){

  const [user] = useContext(UserContext)
  const [lastThree, setLastThree] = useState([])
  const [activateOn, setActivateOn] = useState(false)
  const [current, setCurrent] = useState()
  const [overviewOn, setOverviewOn] = useState(true)
  const [workoutComplete, setWorkoutComplete] = useState(false)
  
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

  function handleBeginWorkout(){
    setActivateOn(true)
    setOverviewOn(!overviewOn)
  }

  function endWorkout(){
    setActivateOn(false)
    setWorkoutComplete(true)
  }

  return(
    <div id="client-home">
      
       {activateOn ? null :
       <>
          <div id= "client-welcome">
            Hello, {user.first_name}!  <div style={{float: "right"}}><Logout /></div>
          </div>
         
       </>
        }
        <Routes>
          <Route path="workouthistory" element={<WorkoutHistory/>}/>
          <Route/>
          <Route/>
        </Routes>
        <Link to='workouthistory'>link</Link>
        {activateOn ? null :
        <div id="client-last-three">
          <p>Here are your recent current workouts:</p>
          <ul>
            {clientWorkouts.length!==0 ? clientWorkouts : "No workouts yet."}
          </ul>
        </div>}
      
        
        <div id="client-next-workout">
          {activateOn ? null : <h3>Here is your current workout:</h3>}
          
          {activateOn ? null :
          <div>
          {current ? <Workout workout={current}/> : <li>You don't have an upcoming workout yet.</li>}
        </div>}
        </div>
        {activateOn ? <ActivateWorkout workout={current} endWorkout={endWorkout}/> : null}
        {workoutComplete ? <div>Congrats, {user.first_name}! Well done. Your trainer will have another workout for you soon. </div> : null}
        {activateOn ? null : <>
          <h4>After <em>warming up</em>, click here to <button id="begin workout" onClick={handleBeginWorkout}>Begin Workout</button></h4>
        </>}
        <br/>
      
  </div>
  )
}

export default ClientHome