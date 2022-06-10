import { useState, useEffect } from 'react';
// import { Routes, Route, NavLink } from 'react-router-dom;'
import ClientCard from './ClientCard';
import AddClient from './AddClient';
import WorkoutOptions from './WorkoutOptions'

function TrainerHome({user, setUser}){
  const [clients, setClients] = useState([])
  const [addClient, setAddClient] = useState(false)
  const [addClientButtonText, setAddClientButtonText] = useState(false)
  const [openWorkouts, setOpenWorkouts] = useState(false)
  

  useEffect(()=>{
    fetch("/myclients").then(r=>r.json()).then(clients=>setClients(clients))
  },[])

  const clientList = clients.map((client)=><NavLink to = "/clientcard">{client.name}</NavLink>)
  // <ClientCard client={client} key={client.id} clients ={clients} setClients={setClients} openWorkouts={openWorkouts} setOpenWorkouts={setOpenWorkouts}/>

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
      <Routes>
        <Route exact path="/clientcard" element={<ClientCard/>}></Route>
      </Routes>
      <h2>Welcome, {user.name}!</h2>
     
      <h3>Here's your current list of clients:</h3>
      <div className="client-list">
      {openWorkouts ? <WorkoutOptions/> : ""} 
      </div>
      
      <div className='client-list'>{clientList}</div>
      <button onClick={openAddClientForm}>{addClientButtonText ? "Close" : "Add Client"}</button>
      <div>{addClient ? <AddClient trainer={user} clients={clients} setClients={setClients} addClient={addClient} setAddClient={setAddClient} setAddClientButtonText={setAddClientButtonText}/> : ""}</div>
      <div id="logout-button"><button onClick={handleLogOut}>Log Out</button></div>

      
    </div>
  )
}

export default TrainerHome