import CreateExerciseForm from '../CreateExerciseForm';
import { useEffect, useState, useContext } from 'react';
import { ExerciseRepContext } from '../context/ExerciseRepContext';
import EachExercise from './EachExercise'

function SelectExercises({newWorkoutExercises, setNewWorkoutExercises, exerciseRep}){
console.log(exerciseRep)
  // function handleSelect(e){
  //   let selectedExercise = newWorkoutExercises.find((id)=>id===e.target.id)
  //   console.log(selectedExercise)
  //   if(!selectedExercise){
  //      setNewWorkoutExercises([...newWorkoutExercises, e.target.id])
  //     //  setInRep(true)
  //   } else {
  //     const filteredExercises = newWorkoutExercises.filter((exercise)=>exercise!==e.target.id)
  //     setNewWorkoutExercises(filteredExercises)
  //     // setInRep(false)
  //     }    
  // }

  const exerciseList = exerciseRep.map((ex)=>{
    console.log(ex)
    return(
      <div>
        <EachExercise exercise={ex} key={ex.id} newWorkoutExercises={newWorkoutExercises} setNewWorkoutExercises={setNewWorkoutExercises}/>
      </div>
    )
  })
  // {
  //   return (<div key={ex.name}>
  //     <input type="checkbox" id={ex.id} name={ex.name} key={ex.name} onChange={handleSelect}/>
  //     <label htmlFor={ex.name} key={ex.id}>{ex.name}, <em>{ex.category}</em></label>
  //   </div>
  //   )
  // }
  return(
    <div>
      <p>Select exercises:</p>
        <div>{exerciseList}</div>
    </div>
    
  )
}

export default SelectExercises