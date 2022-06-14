import { useState } from 'react';
import Errors from './Errors';

function Login({onLogin}){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[errors, setErrors] = useState([]);
  const[isClient, setIsClient] = useState(true)

  function handleRadioSelect(){
    setIsClient(!isClient)
  }
  
  function handleSubmit(e){
    console.log("submit")
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
     <form  onSubmit={handleSubmit}>
      <label>Login</label>
      <p>I am a:</p>
      <div className="radio">
        <label className="radio">
          <input type="radio" value="client" className="radio" checked={isClient} onChange={handleRadioSelect}/>Client
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="Trainer" className="radio" checked={!isClient} onChange={handleRadioSelect}/>Trainer
        </label>
      </div>
      <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
      <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
      <button type="submit">submit</button>
      <Errors errors = {errors}/>
     </form>
     
    </div>
  )
}
 export default Login