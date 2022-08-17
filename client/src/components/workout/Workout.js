import { useState } from 'react';
import Block from './Block';


function Workout({workout}){
  const[fullWorkout, setFullWorkout] = useState()
  const[showWorkout, setShowWorkout] = useState(false)
  console.log(workout)

  function handleShowWorkout(){
    // setShowWorkout(!showWorkout)
    // fetch(`/workouts/${workout.workout_id}`)
    //   .then(r=>r.json())
    //   .then(w=>setFullWorkout(w))
  }

  let exerciseList

  // if(fullWorkout){
  //   exerciseList = fullWorkout.exercises.map(ex=><Exercise exercise={ex} key={ex.id}/>)
  // }

 
  return(
    <div className="workout-card">
      <p>Workout Card</p>
      {/* <li id={workout.completed ? "workout-completed" : "workout-pending"} className="workout-title" onClick={handleShowWorkout}>{workout.title}</li>
      {showWorkout ? 
      <div>
          {exerciseList}
      </div>
        : "" } */}
    </div>
  )
}

export default Workout