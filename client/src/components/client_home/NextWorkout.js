import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const NextWorkout = () => {
  const [user] = useContext(UserContext)
  const navigate = useNavigate()

  const{title} =  user.workouts[user.workouts.length -1]
  return(
    <>
    <h3>{title}</h3>
    <button onClick={()=>navigate('/activateworkout')}>Begin workout</button>
    </>
  )
}