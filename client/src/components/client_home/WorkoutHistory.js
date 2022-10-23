import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const WorkoutHistory = () =>{
  const[user] = useContext(UserContext)
  const workoutHistory = user.workouts.map((workout)=>{
    return(
      <li key={workout.id}>{workout.title}</li>
    )
  })

  return (
    <>
    <p>Here is your workout history: </p>
    <ul>
      {workoutHistory}
    </ul>
    </>
  )
}

