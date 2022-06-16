import { useState } from 'react';

function CreateExerciseForm({exercises, setExercises, setFormOn}){
  const[exerciseName, setExerciseName] = useState("")
  const[instructions, setInstructions] = useState("")
  const[category, setCategory] = useState()

  const newExercise = {
    name: exerciseName,
    instructions,
    category
  }
  
  function handleSubmit(e){
    e.preventDefault()
    setFormOn(false)
    fetch("/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise)
    }).then((r)=>r.json()).then(data=>setExercises([...exercises, data]))
  }
  return(
    <div>
      <form id="create-exercise-form" onSubmit={handleSubmit}>
        <input placeholder="Exercise Name" id="exercise-name" onChange={(e)=>setExerciseName(e.target.value)}></input><br/>
        <textarea placeholder="Instructions" id="exercise-instructions" rows="7" onChange={(e)=>setInstructions(e.target.value)}></textarea>
        <select onChange={(e)=>setCategory(e.target.value)}>
          <option>Upper Body Push</option>
          <option>Upper Body Pull</option>
          <option>Lower Body Hip Hinge</option>
          <option>Lower Body Squat/Lunge</option>
          <option>Core</option>
          <option>Cardio</option>
          <option>Advanced/Tricks/Misc.</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// export default CreateExerciseForm