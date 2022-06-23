import { useState } from 'react';
import Errors from './Errors';

function AddClient({clients, setClients, trainer, addClient, setAddClient, setAddClientButtonText}){
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[age, setAge] = useState()
  const[feet, setFeet] = useState()
  const[inches, setInches] = useState()
  const[weight, setWeight] = useState()
  const[level, setLevel] = useState("Beginner")
  const[workouts, setWorkouts] = useState()
  const[errors, setErrors] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setAddClient(!addClient)
    setAddClientButtonText(false)
    const newClient = {
      name,
      email,
      age,
      feet,
      inches,
      weight,
      fitness_level: level,
      workouts_per_week: workouts,
      trainer_id: trainer.id
    }
    
    fetch("/clients",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient)
    }).then((r) => {
      if (r.ok) {
        r.json().then((client) => setClients([...clients, client]))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }
  

  return(
    <div className="add-client-form">
     <form onSubmit={handleSubmit}>
       <input placeholder="Client Name" onChange={(e)=>setName(e.target.value)}></input>
       <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
       <input placeholder="Age" onChange={(e)=>setAge(e.target.value)}></input>
       <div>
         <label>Height</label>
       <input placeholder="Feet" onChange={(e)=>setFeet(e.target.value)}></input>
       <input placeholder="Inches" onChange={(e)=>setInches(e.target.value)}></input>
       </div>
       <label>Weight</label>
       <input placeholder="(in lbs)" onChange={(e)=>setWeight(e.target.value)}></input>
       <label>Select fitness level</label>
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
       <Errors errors={errors}/>

       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default AddClient