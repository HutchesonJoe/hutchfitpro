function ClientSignup({setFirstName, setLastName, setUserName, setEmail, setFeet, setInches, setWeight, setLevel, setWorkouts, setPassword, setPassConf}){
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
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <input placeholder="Confirm Password" type="password" onChange={(e)=> setPassConf(e.target.value)}></input>
        </div>
    </div>
  )
}

export default ClientSignup;