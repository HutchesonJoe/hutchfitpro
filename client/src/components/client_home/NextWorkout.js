import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const NextWorkout = () => {
  const [user] = useContext(UserContext)
  const navigate = useNavigate()

  const {title, completed, blocks} =  user.workouts.filter((wrkt)=>wrkt.completed===false)[0] || user.workouts[user.workouts.length - 1]
  
  return(
    <>
    <h2>{title}</h2>
    {completed ? 
    <p>Workout completed</p> 
    : <button onClick={()=>navigate('/warmup')}>Begin workout</button>}
    </>
  )
}