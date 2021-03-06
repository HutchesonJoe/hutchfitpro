import { useState, useEffect } from 'react';
import ClientCard from './ClientCard';
import AddClient from './AddClient';

function TrainerHome({user, setUser}){
  const [thisClient, setThisClient] = useState()
  const [clients, setClients] = useState([])
  const [clientCardOn, setClientCardOn] = useState(false)
  const [addClient, setAddClient] = useState(false)
  const [addClientButtonText, setAddClientButtonText] = useState(false)

  useEffect(()=>{
    fetch("/myclients").then(r=>r.json()).then(clients=>setClients(clients))
  },[])

  function handleOpenClientCard(e){
    const client = clients.find((cl)=>cl.id===parseInt(e.target.id))
    setThisClient(client)
    setClientCardOn(!clientCardOn)
  }
  let clientList

  if(clients){
    clientList = clients.map((client)=>{
      return(<div>
        <h3 onClick={handleOpenClientCard} id={client.id} key={client.id} className="client-name">{client.name}</h3>
      </div>
      )
  })
  }
 
  function openAddClientForm(){
    setAddClientButtonText(!addClientButtonText)
    setAddClient(!addClient)
  }

  function handleLogOut(){
    fetch("/logout",{
      method: 'DELETE'
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return(
    
    <div className='trainer-home'>
      {clientCardOn ? <ClientCard client={thisClient} clients={clients} setClients={setClients} clientCardOn={clientCardOn} setClientCardOn={setClientCardOn}/> : ""}
      <h2>Welcome, {user.name}!</h2>
      <h3>Here's your current list of clients:</h3>
      <div className='client-list'>
        {clientList}
      <button onClick={openAddClientForm}>{addClientButtonText ? "Close" : "Add Client"}</button>
      </div>
      
      <div>{addClient ? <AddClient trainer={user} clients={clients} setClients={setClients} addClient={addClient} setAddClient={setAddClient} setAddClientButtonText={setAddClientButtonText}/> : ""}</div>
      
      <div id="logout-button">
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      
    </div>
  )
}

export default TrainerHome