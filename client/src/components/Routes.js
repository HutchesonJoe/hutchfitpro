import { Routes, Route } from 'react-router-dom'
import { WorkoutHistory } from './client_home/WorkoutHistory'
import { NextWorkout } from './client_home/NextWorkout'
import { ClientHome } from './client_home/ClientHome'
import ActivateWorkout from './activate_workout/ActivateWorkout'

export const NavRoutes = () =>{
  return (
  <Routes>
    {/* <Route path="/" element={<ClientHome/>}/> */}
    <Route path="/workouthistory" element={<WorkoutHistory/>}/>
    <Route path="/nextworkout" element={<NextWorkout/>}/>
    <Route path="/activateworkout" element={<ActivateWorkout/>}/>
  </Routes>
  ) 
}