import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Logout from "./Logout";
import Workout from "./workout/Workout";

function ClientHome(){

  const [user, setUser] = useContext(UserContext)
  const [lastThree, setLastThree] = useState([])
  const [current, setCurrent] = useState()
  
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
  

  return(
    <div id="client-home">
      
        <div id= "client-welcome">
           Hello, {user.name}!
        </div>

       
        <div id="client-last-three">
          <p>Last three workouts:</p>
          <ul>
            {clientWorkouts}
          </ul>
        </div>
      
        
        <div id="client-next-workout">
          <h3>Current Workout:</h3>
          <ul>
            {current ? <Workout workout={current}/> : <li>You don't have an upcoming workout yet.</li>}
          </ul>
        </div>
      <Logout/>
  </div>
  )
}

export default ClientHome