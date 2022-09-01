import { useContext, useState } from 'react'
import { ExerciseRepContext } from '../context/ExerciseRepContext'
import EachExercise from './EachExercise'

function SelectExercises({newWorkoutExercises, setNewWorkoutExercises}){
  const [exerciseRep] = useContext(ExerciseRepContext)
  const [filteredRep, setFilteredRep] = useState(exerciseRep)

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

  const exerciseList = filteredRep.map((ex)=>{
    
    return(
      <div key={ex.id}>
        <EachExercise exercise={ex}  newWorkoutExercises={newWorkoutExercises} setNewWorkoutExercises={setNewWorkoutExercises}/>
      </div>
    )
  })

  function handleFilter(e){
    if(e.target.value==="All Exercises"){
      setFilteredRep(exerciseRep)
    } else {
      const exercises = exerciseRep.filter((ex)=>ex.category===e.target.value)
      setFilteredRep(exercises)
    }
  }
 
  return(
    <div>
      <p>Select exercises:</p>
      <div>
        <label>Category: </label>
        <select onChange={handleFilter}>
          <option>All Exercises</option>
          <option>Upper Body Press</option>
          <option>Upper Body Pull</option>
          <option>Lower Body Hip Hinge</option>
          <option>Lower Body Squat/Lunge</option>
          <option>Core</option>
          <option>Cardio</option>
          <option>Advanced/Tricks/Misc.</option>
        </select>
      </div>
        <div>{exerciseList}</div>
    </div>
    
  )
}

export default SelectExercises