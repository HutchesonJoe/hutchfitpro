import CreateExerciseForm from '../CreateExerciseForm';
import { useEffect, useState, useContext } from 'react';
import { ExerciseRepContext } from '../context/ExerciseRepContext'

function SelectExercises({newWorkoutExercises, setNewWorkoutExercises, exerciseRep}){

  function handleSelect(e){
    let selectedExercise = newWorkoutExercises.find((id)=>id===e.target.id)
    if(!selectedExercise){
       setNewWorkoutExercises([...newWorkoutExercises, e.target.id])
       
    } else {
      const filteredExercises = newWorkoutExercises.filter((exercise)=>exercise!==e.target.id)
      setNewWorkoutExercises(filteredExercises)
     
      }    
      
  }

  const exerciseList = exerciseRep.map((ex)=>{
    return (<div key={ex.name}>
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