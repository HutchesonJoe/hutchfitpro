import { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

const CurrentWorkoutContext = createContext()

const CurrentWorkoutProvider = ({children})=>{
  
  const [user] = useContext(UserContext)
  const [workout, setWorkout] = useState()
 
  useEffect(()=>{
    setWorkout(user.workouts[user.workouts.length - 1])
  },[user])
  return <CurrentWorkoutContext.Provider value={workout}>{children}</CurrentWorkoutContext.Provider>
}

export  { CurrentWorkoutContext, CurrentWorkoutProvider }