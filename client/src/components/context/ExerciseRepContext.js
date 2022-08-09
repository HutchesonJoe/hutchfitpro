import { useState, createContext, useEffect} from "react";


const ExerciseRepContext = createContext()

function ExerciseRepProvider({children}){
  const [exerciseRep, setExerciseRep] = useState([])

  useEffect(()=>{
    fetch("./exercises")
    .then(r=>r.json())
    .then(data=>setExerciseRep(data))

  },[])
 
 
  return <ExerciseRepContext.Provider value={[exerciseRep, setExerciseRep]}>{children}</ExerciseRepContext.Provider>
}

export  { ExerciseRepContext, ExerciseRepProvider }