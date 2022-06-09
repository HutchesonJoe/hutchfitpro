import { useState } from 'react';
import EditForm from './EditForm';
import Workout from './Workout'


function ClientCard({client, clients, setClients, openWorkouts, setOpenWorkouts}){
  const[editForm, setEditForm] = useState(false)
  const [assignWorkoutButtonText, setAssignWorkoutButtonText] = useState(true)

  function handleEdit(){
    setEditForm(!editForm)
  }

  const lastThreeWorkouts = client.workouts.slice(-3)
  const clientRecentWorkouts = lastThreeWorkouts.map((workout)=><Workout workout={workout} key={workout.id}/>)
  

  function handleOpenWorkouts(){
    setOpenWorkouts(!openWorkouts)
    setAssignWorkoutButtonText(!assignWorkoutButtonText)
  }

  function handleDelete(){
    const deleteConfirm = window.confirm("Are you sure you want to delete this submission?")
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
      <p>{client.email}</p>
      <p>{client.age} years, {client.feet} ft. {client.inches} in., {client.weight} lbs</p>
      <p>{client.fitness_level}, {client.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>{editForm ? "Close" : "Edit Client"}</button>
      <button onClick={handleDelete}>Delete Client</button>
      <button onClick={handleOpenWorkouts}>{assignWorkoutButtonText ? "Assign Next Workout" : "Close"}</button>
      <div>{editForm ? <EditForm client = {client} clients = {clients} setClients = {setClients} editForm={editForm} setEditForm={setEditForm}/> : ""}</div>
      <div className="client-workouts">
        <p>Most recent workouts:</p>
        <ul>
          {clientRecentWorkouts}
        </ul>
        
      </div>
    </div>
  )
}

export default ClientCard