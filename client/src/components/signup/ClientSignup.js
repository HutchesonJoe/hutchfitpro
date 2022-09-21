<<<<<<< HEAD
function ClientSignup(){
  return(
    <div>
      client Singup
=======
import { useState, useEffect } from 'react';

function ClientSignup({setFirstName, setLastName, setUserName, setEmail, setFeet, setInches, setWeight, setLevel, setWorkouts, setPassword, setPassConf, setTrainerId}){
  const[trainers, setTrainers] = useState([])
  const[trainerOptions, setTrainerOptions] = useState([])
  
  useEffect(()=>{
    fetch("/trainers")
    .then(r=>r.json())
    .then(t=>setTrainers(t))
  },[])

  console.log(trainerOptions)
  useEffect(()=>{
    if(trainers.length!==0){
      const options = trainers.map((tr)=><option key={tr.id} value={tr.id}>{tr.first_name} {tr.last_name}</option>)
      setTrainerOptions(options)
    }
  },[trainers])

  return(
    <div>
      <div>
        <input placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input>
        <input placeholder="Last Name" onChange={((e)=>setLastName(e.target.value))}></input>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input>
        <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
        <div>
         <label>Height</label>
       <input placeholder="Feet" onChange={(e)=>setFeet(e.target.value)}></input>
       <input placeholder="Inches" onChange={(e)=> setInches(e.target.value)}></input>
       </div>
       <label>Weight</label>
       <input placeholder="(in lbs)" onChange={(e)=> setWeight(e.target.value)}></input>
       <label>Select fitness level</label>
       <select onChange={(e)=> setLevel(e.target.value)}>
         <option>Beginner</option>
         <option>Intermediate</option>
         <option>Advanced</option>
       </select>
       <div>
       <label>How many workouts a week? (maximum 5)</label>
       <select onChange={(e)=> setWorkouts(e.target.value)}>
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
         <option>6</option>
       </select>
       </div>
       <div>
        <select onChange={(e)=>setTrainerId(e.target.value)}>
          {trainerOptions}
        </select>
       </div>
       <div>
        <label>Choose a password:</label>
          <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
       </div>
       <div>
        <label>Confirm password: </label>
        <input placeholder="Confirm Password" type="password" onChange={(e)=> setPassConf(e.target.value)}></input>
       </div>
       
        </div>
>>>>>>> origin/updates
    </div>
  )
}

export default ClientSignup;