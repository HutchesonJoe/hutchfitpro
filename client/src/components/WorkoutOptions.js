import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Workout from './workout/Workout'

function WorkoutOptions({client, setWorkoutOptionsOn, workoutOptionsOn, clientWorkouts, setClientWorkouts, setConfirm}){
  //this state needs to move up a component
  const[workouts, setWorkouts] = useState([])
  const[nextWorkoutId, setNextWorkoutId] = useState()
  // const[nextWorkoutTitle, setNextWorkoutTitle] = useState()
  // const[clientNextWorkout, setClientNextWorkout] = useState()
  // const[showWorkoutOn, setShowWorkoutOn] = useState(false)

  useEffect(()=>{
    fetch("/workouts")
    .then(r=>r.json())
    .then((w)=>{
      setWorkouts(w);
    })
  },[])
  
  const workoutOptions = workouts.map((w)=><option id={w.id} key={w.id} value={w.id} >{w.title}</option>)

  
  function handleSubmit(e){
    e.preventDefault()
    setConfirm(true)

    setWorkoutOptionsOn(!workoutOptionsOn)

    fetch(`/workouts/${nextWorkoutId}`)
      .then(r=>r.json())
      // .then(w=>{
      //   setNextWorkoutTitle(w.title)
      //   setClientNextWorkout(w)
      // })
    
    if(nextWorkoutId){
      const workout = workouts.find((w)=>w.id===parseInt(nextWorkoutId))
      const nextWorkout = {
        client_id: client.id,
        workout_id: workout.id,
        workout_title: workout.title,
        completed: false
      }
      
      fetch("/client_workouts",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nextWorkout)
      })
      .then(r=>r.json()).then((data)=>{

        setClientWorkouts([...clientWorkouts, data])
      })
    }
  }

  return(
    <div className="workout-options">
      <form onSubmit={handleSubmit}>
        <select 
        onChange={(e)=>setNextWorkoutId(e.target.value)}>
          <option>Select Workout</option>
          {workoutOptions}
        </select>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default WorkoutOptions