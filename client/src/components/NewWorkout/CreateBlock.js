import SelectExercises from "./SelectExercises";
import { useContext, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext"

function CreateBlock({formOn, setFormOn, newWorkoutExercises, setNewWorkoutExercises, workout, setWorkout}){
  const [exerciseRep] = useContext(ExerciseRepContext)
  const [addBlockOn, setAddBlockOn] = useState(true)
  const [selectExerciseFormOn, setSelectExerciseFormOn] = useState(true)
  const [filteredRep, setFilteredRep] = useState([])
  const [count, setCount] = useState("")
  const [sets, setSets] = useState("")
  const [note, setNotes] = useState("")
  
  // function handleClick(){
  //   setAddBlockOn(!addBlockOn)
  //   // setSelectExerciseFormOn(!selectExerciseFormOn)
  // }
  //this should be where I can filter exercises by "type", so I can create a block this way. 
  //select with options for each category, filter and set state. 
  function handleSubmit(e){
    e.preventDefault()
    let exerciseIds = newWorkoutExercises.map((ex)=>{
      return({exercise_id: parseInt(ex)})
    })
    const block = {
      count,
      exercise_ids: exerciseIds
    }

    fetch("/blocks",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(block)
    })
    .then(r=>r.json())
    .then(data=>console.log(data))
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <div>Select an exercises or multiple exercises for a circuit:</div>
      {selectExerciseFormOn ? <SelectExercises setFormOn={setFormOn} formOn={formOn} newWorkoutExercises={newWorkoutExercises} setNewWorkoutExercises={setNewWorkoutExercises} exerciseRep={exerciseRep}/> : null}
      <select onChange={(e)=>setCount(e.target.value)}>
        <option>Select Count or Duration:</option>
        <option>5 reps</option>
        <option>6 reps</option>
        <option>8 reps</option>
        <option>10 reps</option>
        <option>12 reps</option>
        <option>16 reps</option>
        <option>30 secs</option>
        <option>45 secs</option>
        <opiton>1 min</opiton>
      </select>
      <select onChange={(e)=>setSets(e.target.value)}>
        <option>2 sets</option>
        <option>3 sets</option>
        <option>4 sets</option>
        <options>5 sets</options>
      </select>
      <textarea placeholder="Enter note" onChange={(e)=>setNote(e.target.value)}></textarea>
        
      </form>
    </div>
  )
}

export default CreateBlock