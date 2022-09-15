import { useState } from 'react';
import Errors from '../Errors';
import ClientSignup from './ClientSignup';
import TrainerSignup from './TrainerSignup';

function Signup({setSignUpFormOn}){
  //I probably could split this up between two components: trainer singup and client signup. pass down the setter functioon to setUser, so I have the object here. The components could be just the forms.
  

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [certs, setCerts] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [passConf, setPassConf] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState([])
  const [trainerId, setTrainerId] = useState(1)
  const [age, setAge] = useState()
  const [feet, setFeet] = useState()
  const [inches, setInches] = useState()
  const [weight, setWeight] = useState()
  const[level, setLevel] = useState("Beginner")
  const[workouts, setWorkouts] = useState()
  const [isTrainer, setIsTrainer] = useState(true)
  
  function handleSubmit(e){
    e.preventDefault()
     let newUser
     let userRoute
     if(isTrainer){
      userRoute = "trainers"
      newUser = {
        first_name: firstName,
        last_name: lastName, 
        certifications: certs,
        username: userName,
        email,
        password, 
        password_confirmation: passConf,
        is_trainer: true
      }
     } else {
      userRoute = "clients"
      newUser = {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        password,
        password_confirmation: passConf,
        email, 
        feet,
        inches,
        age,
        weight,
        fitness_level: level,
        workouts_per_week: workouts,
        trainer_id: trainerId,
        is_trainer: false
      }
     }
     
    
    fetch(`/${userRoute}`, {
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

  function handleSetIsTrainer(e){
    if(e.target.value==="Trainer"){
      setIsTrainer(true)
    } else if (e.target.value==="Client"){
      setIsTrainer(false)
    }
  }


  return(
    <div className="signup" >
      <form onSubmit={handleSubmit}>
        
        <label>New to HutchFit PRO?</label>
        <p> I am a new: </p>
        <select onChange={handleSetIsTrainer}>
          <option>Trainer</option>
          <option>Client</option>
        </select>
        {isTrainer ? <TrainerSignup setFirstName={setFirstName} setLastName={setLastName} setCerts={setCerts} setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} setPassConf={setPassConf}/> 
        : <ClientSignup setFirstName={setFirstName} setLastName={setLastName} setUserName={setUserName} setEmail={setEmail} setWeight={setWeight} setFeet={setFeet} setInches={setInches} setAge={setAge} setLevel={setLevel} setWorkouts={setWorkouts} setTrainerId={setTrainerId} setPassword={setPassword} setPassConf={setPassConf}/>}
        {/* <div>
        <input placeholder="Your First Name" onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder="Certifications" onChange={(e)=>setCerts(e.target.value)}></input>
        <input placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}></input>
        <input placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <input placeholder="Confirm Password" type="password" onChange={(e)=>setPassConf(e.target.value)}></input>
        </div> */}
        <button type="Submit">submit</button>
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default Signup