import { useState, useEffect, useContext } from 'react';
import ClientCard from './cards/ClientCard';
import AddClient from './AddClient';
import { UserContext } from './context/UserContext';
import { ExerciseRepContext } from './context/ExerciseRepContext';
import Logout from './Logout';
import ExerciseCollection from './ExerciseCollection';
import { ThisClientContext } from './context/ThisClientContext';

function TrainerHome(){
  const [user, setUser] = useContext(UserContext)
  
  const [thisClient, setThisClient] = useContext(ThisClientContext)
  const [exerciseRep, setExerciseRep] = useContext(ExerciseRepContext)
  const [filteredExerciseRep, setFilteredExerciseRep] = useState([])
  const [clients, setClients] = useState([])
  const [clientCardOn, setClientCardOn] = useState(false)
  const [addClient, setAddClient] = useState(false)
  const [addClientButtonText, setAddClientButtonText] = useState(false)

  useEffect(()=>{
    setClients(user.clients)
  },[])

  useEffect(()=>{
    setFilteredExerciseRep(exerciseRep)
  },[exerciseRep])

  function handleOpenClientCard(e){
    const client = clients.find((cl)=>cl.id===parseInt(e.target.id))
    setThisClient(client)
    setClientCardOn(!clientCardOn)
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
      {clientCardOn ? <ClientCard client={thisClient} clients={clients} setClients={setClients} clientCardOn={clientCardOn} setClientCardOn={setClientCardOn} filteredExerciseRep={filteredExerciseRep} setFilteredExerciseRep={setFilteredExerciseRep}/> : "" }
      <h2>Welcome, {user.name}!</h2>
      <h3>Here's your current list of clients:</h3>
      <div className='client-list'>
        {clientList}
      <button onClick={openAddClientForm}>{addClientButtonText ? "Close" : "Add Client"}</button>
      </div>
      {/* BLOG: Look how we share these parallel PROPS down to these two components: CLientCard and ExerciseCollection. I'm using both UseContext passing props. Why? What is the best solution? */}
      {/* Clients must add themselves; move this component below */}
      {/* <div>{addClient ? <AddClient trainer={user} clients={clients} setClients={setClients} addClient={addClient} setAddClient={setAddClient} setAddClientButtonText={setAddClientButtonText}/> : ""}</div> */}
      <div><button onClick={byAlphabetize}>list alphabetically</button><Logout/></div>
      <div><ExerciseCollection thisClient={thisClient} /></div>
      
    </div>
  )
}

export default TrainerHome