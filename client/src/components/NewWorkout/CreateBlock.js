import SelectExercises from "./SelectExercises";
import { useContext, useState } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import WorkoutPreview from "./WorkoutPreview";

function CreateBlock({formOn, setFormOn, blockArray, setBlockArray, workout, setConfirmOn, setBlockOn}){
  const [exerciseRep] = useContext(ExerciseRepContext)
  const [selectExerciseFormOn, setSelectExerciseFormOn] = useState(true)
  const [newWorkoutExercises, setNewWorkoutExercises] = useState([])
  const [addNewBlock, setAddNewBlock] = useState(true)
  const [count, setCount] = useState("")
  const [sets, setSets] = useState("")
  const [note, setNote] = useState("")
   
 

  let exerciseIds = newWorkoutExercises.map((ex)=>{
    return({exercise_id: parseInt(ex)});
  })

  function handleSubmit(e){
    e.preventDefault()
    setAddNewBlock(false)
    const block = {
      count,
      sets,
      note,
      exercise_ids: exerciseIds,
      workout_id: workout.id

    }
    console.log(block)
    fetch("/blocks",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(block)
    })
    .then(r=>r.json())
    .then((data)=>{
      setBlockArray([...blockArray, data]);
      setNewWorkoutExercises([])
    })
  }

  function handleConfirm(){
   setConfirmOn(true)
   setBlockOn(false)
  }

  return(
    <div>
      <div id = "workout-preview">
        <WorkoutPreview blockArray={blockArray}/>
      </div>
       
      <div>
      {addNewBlock ? 
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
        <option>1 min</option>
      </select>
      <select onChange={(e)=>setSets(e.target.value)}>
        <option>2 sets</option>
        <option>3 sets</option>
        <option>4 sets</option>
        <option>5 sets</option>
      </select>
      <textarea placeholder="Enter note" onChange={(e)=>setNote(e.target.value)}></textarea>
      <button type="submit">Add Block</button>
      </form>
          </div>
          
      : <div><button onClick={()=>setAddNewBlock(true)}>Create New Block</button><button onClick={handleConfirm}>Confirm Workout</button></div>}
      </div>
      </div>
      
  )
}

export default CreateBlock