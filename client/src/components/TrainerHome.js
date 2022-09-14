import { useState, useEffect, useContext } from 'react';
import ClientCard from './cards/ClientCard';
import ClientList from './ClientList'
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
  
  useEffect(()=>{
    setClients(user.clients)
  },[user])

  useEffect(()=>{
    setFilteredExerciseRep(exerciseRep)
  },[exerciseRep])
 
  //*****this is a bit of a mess, this funcxtion below has to set the client, which maybe happens int he client card
  
  function handleOpenClientCard(e){
    const client = clients.find((cl)=>cl.id===parseInt(e.target.value))
    setThisClient(client)
    setClientCardOn(!clientCardOn)
  }
  
  let clientList

  if(clients.length!==0){
    const list = clients.map((cl)=><li key={cl.id} onClick={handleOpenClientCard} value={cl.id}>{cl.first_name}</li>)
    clientList = (
      <div>
        <p>Your Current clients</p>
        <ul>
          {list}
        </ul>
      </div>
      
      )
  }
  

  function byAlphabetize(){
    fetch('/alphabetize')
      .then(r=>r.json())
      .then(data=>setClients(data))
  }

  return(
    
    <div className='trainer-home'>
      <h2>Welcome, {user.first_name}!</h2>
      {clientCardOn ? <ClientCard client={thisClient} clients={clients} setClients={setClients} clientCardOn={clientCardOn} setClientCardOn={setClientCardOn} filteredExerciseRep={filteredExerciseRep} setFilteredExerciseRep={setFilteredExerciseRep}/> : clientList }
      
      {/* BLOG: Look how we share these parallel PROPS down to these two components: CLientCard and ExerciseCollection. I'm using both UseContext passing props. Why? What is the best solution? */}
      {/* Clients must add themselves; move this component below */}
      {/* <div>{addClient ? <AddClient trainer={user} clients={clients} setClients={setClients} addClient={addClient} setAddClient={setAddClient} setAddClientButtonText={setAddClientButtonText}/> : ""}</div> */}
      <div><button onClick={byAlphabetize}>list alphabetically</button><Logout/></div>
      <div><ExerciseCollection thisClient={thisClient} /></div>
      
    </div>
  )
}

export default TrainerHome