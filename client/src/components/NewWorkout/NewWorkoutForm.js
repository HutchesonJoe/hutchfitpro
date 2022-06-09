import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Errors from '../Errors'
import SelectExercises from './SelectExercises';

function NewWorkoutForm({workouts, setWorkouts}){
  const[title, setTitle] = useState("")
  const[formOn, setFormOn] = useState(false)
  const[errors, setErrors] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setFormOn(!formOn)
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
          r.json().then((data)=>setWorkouts([...workouts, data]))
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
  }
  let navigate = useNavigate();

  function handleCreateForm(e){
    navigate("./selectexercises")
  }

  return(
    <div>
      <Routes>
        <Route exact path="/selectexercises" element={<SelectExercises/>}></Route>
      </Routes>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title Workout, i.e. 'Upper Body/Core'" id="exercise-name" onChange={(e)=>setTitle(e.target.value)}></input>
        {/* <SelectExercises setFormOn={setFormOn} formOn={formOn}/> */}
        <button type="submit">Next</button><button onClick={handleCreateForm}>{formOn? "Close" : "Create New Exercise"}</button>
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default NewWorkoutForm