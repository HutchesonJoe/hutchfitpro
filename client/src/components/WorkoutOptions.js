import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewWorkoutForm from './NewWorkout/NewWorkoutForm';
import SelectExercises from './NewWorkout/SelectExercises';

function WorkoutOptions(){
  const[workouts, setWorkouts] = useState([])
  const[formOpen, setFormOpen] = useState(false)
  const[nextWorkout, setNextWorkout] = useState()
  
  useEffect(()=>{
    fetch("/workouts")
    .then(r=>r.json())
    .then((w)=>{
      setWorkouts(w);
    })
  },[])
  
  const workoutOptions = workouts.map((w)=> <option id={w.id} key={w.id} >{w.title}</option>)

  
  function handleSubmit(e){
    e.preventDefault()
    if(nextWorkout){
      console.log(nextWorkout)
    } 
  }

  function openCreateWorkout(){
  }

  return(
    <div className="workout-options">
      
      <p>Select your client's next workout:</p>
      <form onSubmit={handleSubmit}>
        <select onChange={(e)=>setNextWorkout(e.target.value)}>
          <option>Select Workout</option>
          {workoutOptions}
        </select>
        <button type="submit">Next</button>
      </form>
     
      <h3>OR</h3>
      <NavLink to = "/newworkoutform">Create a new workout for your client:</NavLink>
     <div id="create-workout">
     <Routes>
        <Route exact path="/newworkoutform" element={<NewWorkoutForm workouts={workouts} setWorkouts={setWorkouts}/>}>
        {/* <button onClick={openCreateWorkout}>{formOpen ? "Close" : "Create a New Workout"}</button> */}
        </Route>
      </Routes>
        {formOpen ? <NewWorkoutForm workouts={workouts} setWorkouts={setWorkouts}/> : ""}
      </div>

    </div>
  )
}

export default WorkoutOptions