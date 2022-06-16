import { useState } from 'react';
import Errors from './Errors';

function Login({onLogin, nextClientWorkoutOn, setNextClientWorkoutOn}){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[errors, setErrors] = useState([]);
  const[isClient, setIsClient] = useState(true)
  const[clients, setClients] = useState([])
  
  function handleRadioSelect(){
    setIsClient(!isClient)
  }
  
  function handleClientSubmit(e){
    e.preventDefault()
    fetch("/clients")
      .then(r=>r.json())
      .then(clients=>{
        setClients(clients)
        const thisClient = clients.find((client)=>username===client.username)
        onLogin(thisClient)
      if(thisClient){
        if(thisClient.assigned_password===password){
          setNextClientWorkoutOn(!nextClientWorkoutOn)
        } else {
          setErrors(["Oops...that's not quite right."])
          setPassword("")
        }
      } else {
        setErrors(["Oops...that's not quite right."])
      }
      })
    }
  
  
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