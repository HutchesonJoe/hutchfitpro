import { useState } from 'react';
import Errors from './Errors';

function Signup({setUser}){
  const [name, setName] = useState("")
  const [certs, setCerts] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [passConf, setPassConf] = useState("")
  const [errors, setErrors] = useState([])
  
  function handleSubmit(e){
    e.preventDefault()
    const newUser = {
      name, 
      certifications: certs,
      username: userName,
      password, 
      password_confirmation: passConf
    }
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newUser)
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      } else {
        console.log(r.ok)
        r.json().then((err) => setErrors(err))
      }
    });
  }

  return(
    <div className="signup" >
      <form onSubmit={handleSubmit}>
        <label>New to HutchFit PRO?</label>
        <input placeholder="Your First and/or Last Name" onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder="Certifications" onChange={(e)=>setCerts(e.target.value)}></input>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input>
        <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
        <input placeholder="Confirm Password" onChange={(e)=>setPassConf(e.target.value)}></input>
        <button type="Submit">submit</button>
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default Signup