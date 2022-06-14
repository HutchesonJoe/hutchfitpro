import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import EditForm from './EditForm';
import WorkoutOptions from './WorkoutOptions';
import NewWorkoutForm from './NewWorkout/NewWorkoutForm';
import Workout from './Workout'

function ClientCard({client, clients, setClients, clientCardOn, setClientCardOn}){
  const[editFormOpen, setEditFormOpen] = useState(false)
  const[workoutOptionsOn, setWorkoutOptionsOn] = useState(false)
  // const[nextWorkout, setNextWorkout] = useState()
  const[clientWorkouts, setClientWorkouts] = useState([])
  const[confirm, setConfirm] = useState(false)
  const[clientInfo, setClientInfo] = useState(client)

  useEffect(()=>{
      setClientWorkouts(clientInfo.client_workouts)
  },[])
   
  function handleEdit(){
    setEditFormOpen(!editFormOpen)
  }
  const lastThreeWorkouts = clientWorkouts.slice(-3)
  const clientRecentWorkouts = lastThreeWorkouts.map((workout)=><Workout workout={workout} key={workout.id}/>)

  function handleDelete(){
    const deleteConfirm = window.confirm("Are you sure you want to delete this cleint? You CANNOT undo this action.")

    if (deleteConfirm){
      setClientCardOn(!clientCardOn)
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
      <h3>{clientInfo.name}</h3>
      <p>Email: {clientInfo.email}</p>
      <p>Stats: {clientInfo.age} years, {clientInfo.feet} ft. {clientInfo.inches} in., {clientInfo.weight} lbs</p>
      <p>{clientInfo.fitness_level}, {clientInfo.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>{editFormOpen ? "Close Edit Client" : "Edit Client"}</button>
      <button onClick={handleDelete}>Delete Client</button>
      <div>{editFormOpen ? <EditForm client = {client} clients = {clients} setClients = {setClients} editForm={editFormOpen} setEditForm={setEditFormOpen} clientInfo={clientInfo} setClientInfo={setClientInfo}/> : ""}</div>
      <div className="client-workouts">
        <p>Most recent workouts (in chronological order):</p>
        <ul>
          {clientRecentWorkouts}
        </ul>
      <div>
      <button onClick={()=>setWorkoutOptionsOn(!workoutOptionsOn)}>Set your client's next workout:</button>
        {workoutOptionsOn ?  <WorkoutOptions client={client} workoutOptionsOn={workoutOptionsOn} setWorkoutOptionsOn={setWorkoutOptionsOn} clientWorkouts={clientWorkouts} setClientWorkouts={setClientWorkouts} confirm={confirm} setConfirm={setConfirm}/> : ""}
        </div>
        <NavLink to="/newworkout">OR create a new workout above.</NavLink>
      </div>
    </div>
  )
}

export default ClientCard