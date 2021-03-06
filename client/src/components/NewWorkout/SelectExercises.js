import CreateExerciseForm from '../CreateExerciseForm';
import { useEffect, useState } from 'react';

function SelectExercises({newWorkoutExercises, setNewWorkoutExercises}){

  const[exercises, setExercises] = useState([])
  
  
  useEffect(()=>{
    fetch("./exercises").then(r=>r.json()).then((data)=>setExercises(data))
  },[])
  
  function handleSelect(e){
    let selectedExercise = newWorkoutExercises.find((id)=>id===e.target.id)
    if(!selectedExercise){
       setNewWorkoutExercises([...newWorkoutExercises, e.target.id])
       
    } else {
      const filteredExercises = newWorkoutExercises.filter((exercise)=>exercise!==e.target.id)
      setNewWorkoutExercises(filteredExercises)
     
      }    
      
  }

  const exerciseList = exercises.map((ex)=>{
    return (<div>
      <input type="checkbox" id={ex.id} name={ex.name} value={ex.instructions} key={ex.name} onChange={handleSelect}/>
      <label htmlFor={ex.name} key={ex.id}>{ex.name}, <em>{ex.category}</em></label>
    </div>
    )
  })
  return(
    <div>
      <p>Select exercises:</p>
        <div>{exerciseList}</div>
    </div>
    
  )
}

export default SelectExercises