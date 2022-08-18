import CreateExerciseForm from '../CreateExerciseForm';
import { useEffect, useState, useContext } from 'react';
import { ExerciseRepContext } from '../context/ExerciseRepContext'

function SelectExercises({newWorkoutExercises, setNewWorkoutExercises, exerciseRep}){

  function handleSelect(e){
    let selectedExercise = newWorkoutExercises.find((id)=>id===e.target.id)
    console.log(selectedExercise)
    if(!selectedExercise){
       setNewWorkoutExercises([...newWorkoutExercises, e.target.id])
      //  setInRep(true)
    } else {
      const filteredExercises = newWorkoutExercises.filter((exercise)=>exercise!==e.target.id)
      setNewWorkoutExercises(filteredExercises)
      // setInRep(false)
      }    
  }

  const exerciseList = exerciseRep.map((ex)=>{
    return (<div key={ex.name}>
      {/* this has to change for sure; I have to specifcally set the value when I put the exerrcise in the array. How do I reset all the checks to blank on submit?*/}
      {/* this should break into its own component. */}
      <input type="checkbox" id={ex.id} name={ex.name} key={ex.name} onChange={handleSelect}/>
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