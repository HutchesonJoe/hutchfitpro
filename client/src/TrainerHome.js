import { useState, useEffect } from 'react';
import ClientCard from './ClientCard'
import AddClient from './AddClient'

function TrainerHome({user, setUser}){
  const [clients, setClients] = useState([])
  const [addClient, setAddClient] = useState(false)

  useEffect(()=>{
    fetch("/myclients").then(r=>r.json()).then(clients=>setClients(clients))
  },[])

  const clientList = clients.map((client)=><ClientCard client={client} key={client.id}/>)

  function openAddClientForm(){
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
      <p>Welcome, {user.name}!</p>
      <p>Here's your current list of clients:</p>
      <div className='client-list'>{clientList}</div>
      <button onClick={openAddClientForm}>Add Client</button>
      {addClient ? <AddClient trainer={user} clients={clients} setClients={setClients}/> : ""}
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default TrainerHome