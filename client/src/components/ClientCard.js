import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import EditForm from './EditForm';
import WorkoutOptions from './WorkoutOptions';
import NewWorkoutForm from './NewWorkout/NewWorkoutForm';
import Workout from './Workout'
import ConfirmWorkout from './ConfirmWorkout';

function ClientCard({client, clients, setClients}){
  const[editForm, setEditForm] = useState(false)
  const[workoutOptionsOn, setWorkoutOptionsOn] = useState(false)
  const[confirm, setConfirm] = useState(false)
  const[nextWorkout, setNextWorkout] = useState()
   
  function handleEdit(){
    setEditForm(!editForm)
  }

  const lastThreeWorkouts = client.workouts.slice(-3)
  const clientRecentWorkouts = lastThreeWorkouts.map((workout)=><Workout workout={workout} key={workout.workout_id}/>)
  
  // function handleOpenWorkouts(){
  //   setAssignWorkoutButtonText(!assignWorkoutButtonText)
  // }

  function handleDelete(){
    const deleteConfirm = window.confirm("Are you sure you want to delete this cleint? You CANNOT undo this action.")
    if (deleteConfirm){
      fetch(`/clients/${client.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      }).then(()=>{
        const newClientList = clients.filter((c)=>c.id!==parseInt(client.id))
        setClients(newClientList)
      })
    }
  }

  
  return(
    <div className="client-card">
      <h3>{client.name}</h3>
      <p>Email: {client.email}</p>
      <p>Stats: {client.age} years, {client.feet} ft. {client.inches} in., {client.weight} lbs</p>
      <p>{client.fitness_level}, {client.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>{editForm ? "Close" : "Edit Client"}</button>
      <button onClick={handleDelete}>Delete Client</button>
      
      <div>{editForm ? <EditForm client = {client} clients = {clients} setClients = {setClients} editForm={editForm} setEditForm={setEditForm}/> : ""}</div>
      <div className="client-workouts">
        <p>Most recent workouts (in chronological order):</p>
        <ul>
          {clientRecentWorkouts}
        </ul>
      <div>
      <button onClick={()=>setWorkoutOptionsOn(!workoutOptionsOn)}>Set your client's next workout:</button>
        {workoutOptionsOn ?  <WorkoutOptions client={client} setConfirm={setConfirm} nextWorkout={nextWorkout} setNextWorkout={setNextWorkout}/> : ""}
        </div>
        <NavLink to="/newworkout">OR create a new workout above.</NavLink>
      </div>
      <div id="confirm-workout">{confirm ? <ConfirmWorkout client={client} setConfirm={setConfirm} nextWorkout={nextWorkout}/> : ""}</div>
    </div>
  )
}

export default ClientCard