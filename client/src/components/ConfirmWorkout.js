import { useEffect, useState } from 'react';
import Exercise from './Exercise'

function ConfirmWorkout({client}){
  const nextWorkoutId = (client.client_workouts[client.client_workouts.length - 1]).workout_id
  console.log(nextWorkoutId)
  const[workout, setWorkout] = useState()
  
  useEffect(()=>{
      fetch(`/workouts/${nextWorkoutId}`)
      .then(r=>r.json())
      .then(data=>setWorkout(data))
    },[])

  let exercisesArr=[]
  let exerciseList

  if(workout !== undefined){
    workout.exercises.map(ex=>exercisesArr.push(ex))
    exerciseList = exercisesArr.map(ex=><Exercise exercise={ex}/>)
  }

  return(
    <div>
      Confirm Workout
      <h3>{client.name}'s Next Workout:</h3>
      {workout ? <div>
        {workout.title}
        {exerciseList}
      </div> : ''}
    </div>
  )
}

export default ConfirmWorkout;