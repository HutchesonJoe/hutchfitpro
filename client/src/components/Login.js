import { useState } from 'react';
import Errors from './Errors';

function Login({onLogin, isTrainer, setIsTrainer}){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  // const[isTrainer, setIsTrainer] = useState(false)
  const[errors, setErrors] = useState([]);
  
  function handleSubmit(e){
    const user = {
      username,
      password,
      isTrainer
    } 
    console.log(user)
    e.preventDefault()
    
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((r)=> {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors([err.errors]))
      }
    })
  }

  function handleSetIsTrainer(value){
    setIsTrainer(JSON.parse(value))
  }

  return(
    <div className="login">
      <h3>Trainer Login</h3>
     <form  onSubmit={handleSubmit}>
      <select onChange={(e)=>handleSetIsTrainer(e.target.value)}>
        <option value={false}>Client</option>
        <option value={true}>Trainer</option>
      </select>
      <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
      <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
      <button type="submit">submit</button>
      <Errors errors = {errors}/>
     </form>
     
    </div>
  )
}
 export default Login