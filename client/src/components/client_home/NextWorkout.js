import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { WorkoutTitle, BeginWorkoutButton } from '../styles/WorkoutStyles'
import { CurrentWorkoutContext } from '../context/CurrentWorkoutContext'

export const NextWorkout = () => {
  const [user] = useContext(UserContext)
  const[workout] = useContext(CurrentWorkoutContext)
  const[completed, setCompleted] = useState(false)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(workout){
      setCompleted(workout.completed)
    }
  },[workout])

  return(
    <>
    <WorkoutTitle>{workout ? workout.title : ''}</WorkoutTitle>
    {completed ? 
    <p>Workout completed</p> 
    : <BeginWorkoutButton onClick={()=>navigate('/warmup')}>Begin workout</BeginWorkoutButton>}
    </>
  )
}