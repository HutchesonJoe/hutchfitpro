import { useState, createContext } from "react";

const CurrentWorkoutContext = createContext()

function CurrentWorkoutProvider({children}){
  const [workout, setWorkout] = useState()
  return <CurrentWorkoutContext.Provider value={[workout, setWorkout]}>{children}</CurrentWorkoutContext.Provider>
}

export  { CurrentWorkoutContext, CurrentWorkoutProvider }