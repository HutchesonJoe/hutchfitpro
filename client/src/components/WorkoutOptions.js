import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function WorkoutOptions({client, setConfirm, nextWorkout, setNextWorkout}){
  const[workouts, setWorkouts] = useState([])
  const[nextWorkoutId, setNextWorkoutId] = useState()

  useEffect(()=>{
    fetch("/workouts")
    .then(r=>r.json())
    .then((w)=>{
      setWorkouts(w);
    })
  },[])
  
  const workoutOptions = workouts.map((w)=> <option id={w.id} key={w.id} value={w.id} >{w.title}</option>)

  
  function handleSubmit(e){
    e.preventDefault()
    setConfirm(true)
    if(nextWorkoutId){
      const nextWorkout = {
        client_id: client.id,
        workout_id: parseInt(nextWorkoutId)
      }
      
      fetch("/client_workouts",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nextWorkout)
      })
      .then(r=>r.json()).then((data)=>setNextWorkout(data))
    }
  }


  return(
    <div className="workout-options">
      <form onSubmit={handleSubmit}>
        <select onChange={(e)=>setNextWorkoutId(e.target.value)}>
          <option>Select Workout</option>
          {workoutOptions}
        </select>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default WorkoutOptions