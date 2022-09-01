import { useState, useEffect} from 'react'

function EachExercise({exercise, newWorkoutExercises, setNewWorkoutExercises}){
  //console.log(newWorkoutExercises)
  //do I need this state?
  const[inBlock, setInBlock] = useState(false)
  
  function handleSelect(e){
    setInBlock(!inBlock)
    let selectedExercise = newWorkoutExercises.find((id)=>id===e.target.id)
   
    if(!selectedExercise){
       setNewWorkoutExercises([...newWorkoutExercises, e.target.id])
      //  setInRep(true)
    } else {
      const filteredExercises = newWorkoutExercises.filter((exercise)=>exercise!==e.target.id)
      setNewWorkoutExercises(filteredExercises)
      // setInRep(false)
      }    
  }
  return(
    <div>
      <input type="checkbox" id={exercise.id} name={exercise.name} value={inBlock} key={exercise.name} onChange={handleSelect}/>
      <label htmlFor={exercise.name} key={exercise.id}>{exercise.name}, <em>{exercise.category}</em></label>
      {/* {exercise.name} */}
    </div>
  )
}

export default EachExercise