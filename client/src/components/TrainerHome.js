import { useState, useEffect, useContext } from 'react';
import ClientCard from './cards/ClientCard';
import AddClient from './AddClient';
import { UserContext } from './context/UserContext';
import { ExerciseRepContext } from './context/ExerciseRepContext';
import Logout from './Logout';
import ExerciseCollection from './ExerciseCollection';

function TrainerHome(){
  const [user, setUser] = useContext(UserContext)
  
  const [thisClient, setThisClient] = useState()
  const [clientExercises, setClientExercises] = useState([])
  const [exerciseRep, setExerciseRep] = useContext(ExerciseRepContext)
  const [filteredExerciseRep, setFilteredExerciseRep] = useState([])
  const [clients, setClients] = useState([])
  const [clientCardOn, setClientCardOn] = useState(false)
  const [addClient, setAddClient] = useState(false)
  const [addClientButtonText, setAddClientButtonText] = useState(false)
  console.log(clientExercises)
  useEffect(()=>{
    setClients(user.clients)
  },[])

  useEffect(()=>{
    setFilteredExerciseRep(exerciseRep)
  },[exerciseRep])

  function handleOpenClientCard(e){
    const client = clients.find((cl)=>cl.id===parseInt(e.target.id))
    console.log(client.exercises)
    setThisClient(client)
    setClientCardOn(!clientCardOn)
    setClientExercises(client.exercises)
  }
  let clientList

  if(clients){
    clientList = clients.map((client)=>{
      return(<div key={client.id}>
        <p onClick={handleOpenClientCard} id={client.id} key={client.id} className="client-name">{client.name}</p>
      </div>
      )
  })
  }
 
  function openAddClientForm(){
    setAddClientButtonText(!addClientButtonText)
    setAddClient(!addClient)
  }

  

  function byAlphabetize(){
    fetch('/alphabetize')
      .then(r=>r.json())
      .then(data=>setClients(data))
  }

  return(
    
    <div className='trainer-home'>
      {clientCardOn ? <ClientCard client={thisClient} clients={clients} setClients={setClients} clientCardOn={clientCardOn} setClientCardOn={setClientCardOn} clientExercises={clientExercises} setClientExercises={setClientExercises} filteredExerciseRep={filteredExerciseRep} setFilteredExerciseRep={setFilteredExerciseRep}/> : "" }
      <h2>Welcome, {user.name}!</h2>
      <h3>Here's your current list of clients:</h3>
      <div className='client-list'>
        {clientList}
      <button onClick={openAddClientForm}>{addClientButtonText ? "Close" : "Add Client"}</button>
      </div>
      {/* BLOG: Look how we share these parallel PROPS down to these two components: CLientCard and ExerciseCollection. I'm using both UseContext passing props. Why? What is the best solution? */}
      {/* Clients must add themselves; move this component below */}
      {/* <div>{addClient ? <AddClient trainer={user} clients={clients} setClients={setClients} addClient={addClient} setAddClient={setAddClient} setAddClientButtonText={setAddClientButtonText}/> : ""}</div> */}
      <div><button onClick={byAlphabetize}>By Alphabetize</button><Logout/></div>
      <div>{clientCardOn ? <ExerciseCollection thisClient={thisClient} clientExercises={clientExercises} setClientExercises={setClientExercises} filteredExerciseRep={filteredExerciseRep} setFilteredExerciseRep={setFilteredExerciseRep}/> : null}</div>
      
    </div>
  )
}

export default TrainerHome