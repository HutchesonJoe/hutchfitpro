import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Errors from '../Errors'
import SelectExercises from './SelectExercises';

function NewWorkoutForm({workouts, setWorkouts}){
  const[exercises, setExercises] = useState([])
  const[formOn, setFormOn] = useState(false)
  const[errors, setErrors] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    // fetch("/workouts",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(workout)
    // })
    //   .then((r) => {
    //     if(r.ok){
    //       r.json().then((data)=>setWorkouts([...workouts, data]))
    //     } else {
    //       r.json().then((err) => setErrors(err.errors))
    //     }
    //   })
  }
  let navigate = useNavigate();

  function handleCreateForm(e){
    setFormOn(!formOn)
    navigate("./selectexercises")
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title Workout, i.e. 'Upper Body/Core'" id="exercise-name"></input>
        <SelectExercises setFormOn={setFormOn} formOn={formOn}/>
        <button type="submit">Next</button><button onClick={handleCreateForm}>{formOn? "Close" : "Create New Exercise"}</button>
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default NewWorkoutForm