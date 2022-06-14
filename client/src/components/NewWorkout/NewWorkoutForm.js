import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Errors from '../Errors'
import SelectExercises from './SelectExercises';

function NewWorkoutForm({}){
  const[title, setTitle] = useState("")
  const[workoutId, setWorkoutId] = useState()
  const[titleInputOn, setTitleInputOn] = useState(true)
  const[submitted, setSubmitted] = useState(false)
  const[formOn, setFormOn] = useState(false)
  const[errors, setErrors] = useState([])
  const[selectExercisesOn, setSelectExercisesOn] = useState(false) 
  const[newWorkoutExercises, setNewWorkoutExercises] = useState([])

  function handleSubmitTitle(e){
    e.preventDefault()
    setTitleInputOn(!titleInputOn)
    setSelectExercisesOn(!selectExercisesOn)
    fetch("/workouts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      title
    })
    })
      .then((r) => {
        if(r.ok){
          r.json().then((data)=>{
            console.log(data)
            setTitle(data.title)
            setWorkoutId(data.id)
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
      
  }
  
  const navigate = useNavigate()

  function handleSubmitExercises(e){
    e.preventDefault()
    setSubmitted(!submitted)
    setSelectExercisesOn(!selectExercisesOn)
    newWorkoutExercises.map((ex)=>{
      //can I patchc all the exercises to the workout_exercise? 
      const exercise = { exercise_id: ex.id, workout_id: workoutId}
      console.log(exercise)
      fetch('/workout_exercises',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exercise)     
      })
        .then(r=>r.json())
        .then(ex=>console.log(ex))
    })
  }
 
  function handleNavigate(){
    navigate(-1)
  }

  return(
    <div>
      <form onSubmit={handleSubmitTitle}>
        <div>
            {titleInputOn ? <input  id="workout-title-input" placeholder="Title Workout, i.e. 'Upper Body/Core'" onChange={(e)=>setTitle(e.target.value)}></input> : ""}
        </div>
        <div>
          {selectExercisesOn ? 
            <div>
              <p className="workout-title">{title}</p>
              <SelectExercises setFormOn={setFormOn} formOn={formOn} newWorkoutExercises={newWorkoutExercises} setNewWorkoutExercises={setNewWorkoutExercises}/>
            </div>
            : ""}
        </div>
       
      
        {titleInputOn ? <button type="submit">Next</button> : <button onClick={submitted ? handleNavigate : handleSubmitExercises}>{submitted ? "Back to Clients": "Submit Workout"}</button>}
        {submitted ? "Your new workout has been submitted and can now be selected for your client's next workout." : ""}
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default NewWorkoutForm