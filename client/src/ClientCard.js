import { useState } from 'react';

function ClientCard({client, clients, setClients}){
  const[editForm, setEditForm] = useState(false)

  function handleEdit(){
    console.log("edit")
  }

  function handleDelete(){
    
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

  return(
    <div className="client-card">
      <h3>{client.name}</h3>
      <p>{client.email}</p>
      <p>{client.age} years, {client.feet} ft. {client.inches} in., {client.weight} lbs</p>
      <p>{client.fitness_level}, {client.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ClientCard