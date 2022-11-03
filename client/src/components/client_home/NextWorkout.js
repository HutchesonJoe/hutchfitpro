import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { WorkoutTitle, BeginWorkoutButton } from '../styles/WorkoutStyles'

export const NextWorkout = () => {
  const [user] = useContext(UserContext)
  const navigate = useNavigate()

  const {title, completed, blocks} =  user.workouts.filter((wrkt)=>wrkt.completed===false)[0] || user.workouts[user.workouts.length - 1]
  
  return(
    <>
    <WorkoutTitle>{title}</WorkoutTitle>
    {completed ? 
    <p>Workout completed</p> 
    : <BeginWorkoutButton onClick={()=>navigate('/warmup')}>Begin workout</BeginWorkoutButton>}
    </>
  )
}