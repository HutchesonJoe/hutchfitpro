import { useState } from 'react';
import Errors from './Errors'

function EditForm({client, clients, setClients, editForm, setEditForm, setClientInfo}){
  
  const[newEmail, setEmail] = useState(client.email)
  const[newAge, setAge] = useState(client.age)
  const[newFeet, setFeet] = useState(client.feet)
  const[newInches, setInches] = useState(client.inches)
  const[newWeight, setWeight] = useState(client.weight)
  const[newLevel, setLevel] = useState(client.fitness_level)
  const[newWorkouts, setWorkouts] = useState(client.workouts_per_week)
  const[errors, setErrors] = useState([])
  
  function handleEdit(e){
    e.preventDefault()
    setEditForm(!editForm)
    const clientUpdate = {
      email: newEmail,
      age: newAge,
      feet: newFeet,
      inches: newInches,
      weight: newWeight,
      fitness_level: newLevel,
      workouts_per_week: newWorkouts
    }

    setClientInfo(clientUpdate)
    
    const clientIndex = clients.findIndex((cl) => cl.id===client.id)
    const filteredClients = clients.filter((cl) => cl.id!==client.id)
    fetch (`/clients/${client.id}/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientUpdate)
      }).then((r) => {
        if (r.ok) {
          r.json().then((data)=>{
            filteredClients.splice(clientIndex, 0, data)
            setClients(filteredClients)
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
  }

  return(
    <div className="edit-form">
       
      <form onSubmit={handleEdit}>
        <input placeholder={client.email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder={client.age} onChange={(e)=>setAge(e.target.value)}></input>
        <input placeholder={client.feet} onChange={(e)=>setFeet(e.target.value)}></input>
        <input placeholder={client.inches} onChange={(e)=>setInches(e.target.value)}></input>
        <input placeholder={client.weight} onChange={(e)=>setWeight(e.target.value)}></input>
        <select onChange={(e)=>setLevel(e.target.value)}>
         <option>Beginner</option>
         <option>Intermediate</option>
         <option>Advanced</option>
       </select>
       <label>How many workouts a week? (maximum 5)</label>
       <select onChange={(e)=>setWorkouts(e.target.value)}>
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
         <option>6</option>
       </select>
       <div>
         <Errors errors={errors}/>
       </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditForm