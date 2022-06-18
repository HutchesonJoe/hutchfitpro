import { useState } from 'react';
import Errors from './Errors';

function Login({onLogin}){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[errors, setErrors] = useState([]);
  
  function handleTrainerSubmit(e){
  
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({username, password})
    }).then((r)=> {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return(
    <div className="login">
      <h3>Trainer Login</h3>
     <form  onSubmit={handleTrainerSubmit}>
      
      <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
      <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
      <button type="submit">submit</button>
      <Errors errors = {errors}/>
     </form>
     
    </div>
  )
}
 export default Login