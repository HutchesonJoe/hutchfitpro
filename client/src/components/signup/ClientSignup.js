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
        <label>First Name:</label>
        <input placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input><br/>
        <label>Last Name:</label>
        <input placeholder="Last Name" onChange={((e)=>setLastName(e.target.value))}></input><br/>
        <label>User Name:</label>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input><br/>
        <label>Email:</label>
        <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input><br/>
        <label>Password:</label>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input><br/>
        <label>Confirm password: </label>
        <input placeholder="Confirm Password" type="password" onChange={(e)=> setPassConf(e.target.value)}></input><br/>
        {/* <div>
         <label>Height</label>
       <input placeholder="Feet" onChange={(e)=>setFeet(e.target.value)}></input>
       <input placeholder="Inches" onChange={(e)=> setInches(e.target.value)}></input>
       </div>
       <label>Weight</label>
       <input placeholder="(in lbs)" onChange={(e)=> setWeight(e.target.value)}></input> */}

       <label>How often are you working out currently?</label>
       <select onChange={(e)=> setLevel(e.target.value)}>
         <option>I never work out.</option>
         <option>Walk/ight cardio sometimes.</option>
         <option>A couple classes a week.</option>
         <option>Three or more times a week.</option>
       </select>
       <div>
       <label>How many workouts a week will you do?</label>
       <select label="Workouts per week?" onChange={(e)=> setWorkouts(e.target.value)}>
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
         <option>6</option>
       </select>
       </div>
       <div>
        <label>Who is your trainer?</label>
        <select onChange={(e)=>setTrainerId(e.target.value)}>
          {trainerOptions}
        </select>
       </div>
       
       
        </div>
    </div>
  )
}

export default ClientSignup;