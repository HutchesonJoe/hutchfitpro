import { Routes, Route } from 'react-router-dom'
import { WorkoutHistory } from './client_home/WorkoutHistory'
import { NextWorkout } from './client_home/NextWorkout'
import { ClientHome } from './client_home/ClientHome'
import ActivateWorkout from './activate_workout/ActivateWorkout'
import { WarmUp } from './activate_workout/WarmUp'

export const NavRoutes = () =>{
  return (
  <Routes>
    {/* <Route path="/" element={<ClientHome/>}/> */}
    <Route path="/workouthistory" element={<WorkoutHistory/>}/>
    <Route path="/nextworkout" element={<NextWorkout/>}/>
    <Route path="/activateworkout" element={<ActivateWorkout/>}/>
    <Route path="/warmup" element={<WarmUp/>}/>
  </Routes>
  ) 
}