import { useState } from 'react';
import Errors from './Errors';

function Signup({setUser, signUpFormOn, setSignUpFormOn}){
  const [name, setName] = useState("")
  const [certs, setCerts] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [passConf, setPassConf] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState([])
  
  function handleSubmit(e){
    e.preventDefault()
    setSignUpFormOn(false)
    const newUser = {
      name, 
      certifications: certs,
      username: userName,
      email,
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
      if (!r.ok) {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }

  return(
    <div className="signup" >
      <form onSubmit={handleSubmit}>
        <label>New to HutchFit PRO?</label>
        <input placeholder="Your First Name" onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder="Certifications" onChange={(e)=>setCerts(e.target.value)}></input>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input>
        <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
        <input placeholder="Confirm Password" onChange={(e)=>setPassConf(e.target.value)}></input>
        <button type="Submit">submit</button>
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default Signup