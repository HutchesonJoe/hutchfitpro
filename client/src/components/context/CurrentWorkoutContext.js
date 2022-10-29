import { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

const CurrentWorkoutContext = createContext()

const CurrentWorkoutProvider = ({children})=>{
  
  const [user] = useContext(UserContext)
  const [workout, setWorkout] = useState()
 
  useEffect(()=>{
    const workouts = user.workouts.filter((wrkt)=>wrkt.completed===false)
    setWorkout(workouts[0])
  },[user])
  return <CurrentWorkoutContext.Provider value={[workout, setWorkout]}>{children}</CurrentWorkoutContext.Provider>
}

export  { CurrentWorkoutContext, CurrentWorkoutProvider }