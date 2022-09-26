
function TrainerSignup({setEmail, setFirstName, setLastName, setCerts, setUserName, setPassConf, setPassword}){

  return(
    <div>
      <div>
        <input placeholder="Your First Name" onChange={(e)=>setFirstName(e.target.value)}></input>
        <input placeholder="Your Last Name" onChange={(e)=>setLastName(e.target.value)}></input>
        <input placeholder="Certifications" onChange={(e)=>setCerts(e.target.value)}></input>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input>
        <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <input placeholder="Confirm Password" type="password" onChange={(e)=>setPassConf(e.target.value)}></input>
        </div>
    </div>
  )
}

export default TrainerSignup;