import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const NextWorkout = () => {
  const [user] = useContext(UserContext)
  const navigate = useNavigate()

  const{title, completed} =  user.workouts.filter((wrkt)=>wrkt.completed===false)[0]

  return(
    <>
    <h3>{title}</h3>
    {completed ? "Workout completed" : <button onClick={()=>navigate('/warmup')}>Begin workout</button>}
    </>
  )
}