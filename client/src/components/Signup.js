import { useState } from 'react';
import Errors from './Errors';

function Signup({setSignUpFormOn}){
  //I probably could split this up between two components: trainer singup and client signup. pass down the setter functioon to setUser, so I have the object here. The components could be just the forms.
  
  const [name, setName] = useState("")
  const [certs, setCerts] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [passConf, setPassConf] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState([])
  const [trainerId, setTrainerId] = useState()
  const [age, setAge] = useState()
  const [feet, setFeet] = useState()
  const [inches, setInches] = useState()
  const [weight, setWeight] = useState()
  
  function handleSubmit(e){
    e.preventDefault()
     let newUser
     if(isTrainer){
      newUser = {
        name, 
        certifications: certs,
        username: userName,
        email,
        password, 
        password_confirmation: passConf
      }
     } else {
      newUser = {
        name,
        userName,
        password,
        passConf,
        email, 
        feet,
        inches,
        age,
        weight,
        trainer_id: trainerId
      }
     }
     
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newUser)
    }).then((r) => {
      if (r.ok) {
        r.json().then(()=>setErrors(["Success! Log in above."]))
      }
      if (!r.ok) {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }

  return(
    <div className="signup" >
      <form onSubmit={handleSubmit}>
        <label>New to HutchFit PRO?</label>
        <div>
        <input placeholder="Your First Name" onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder="Certifications" onChange={(e)=>setCerts(e.target.value)}></input>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input>
        <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <input placeholder="Confirm Password" type="password" onChange={(e)=>setPassConf(e.target.value)}></input>
        </div>
        <button type="Submit">submit</button>
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default Signup