import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import EditForm from '../EditForm';
import WorkoutOptions from '../WorkoutOptions';
import Workout from '../Workout'

function ClientCard({client, clients, setClients, clientCardOn, setClientCardOn, clientExercises, setClientExercises}){
  const[editFormOpen, setEditFormOpen] = useState(false)
  const[workoutOptionsOn, setWorkoutOptionsOn] = useState(false)
  const[clientWorkouts, setClientWorkouts] = useState([])
  const[confirm, setConfirm] = useState(false)
  const[clientInfo, setClientInfo] = useState(client)
  
  console.log(client.client_exercises)
  useEffect(()=>{
      setClientWorkouts(client.workouts)
  },[])
   
  function handleEdit(){
    setEditFormOpen(!editFormOpen)
  }


  const lastThreeWorkouts = clientWorkouts.slice(-3)
  const clientRecentWorkouts = lastThreeWorkouts.map((workout)=><Workout workout={workout} key={workout.id}/>)

  function handleDelete(){
    const deleteConfirm = window.confirm("Are you sure you want to delete this client? You CANNOT undo this action.")

    if (deleteConfirm){
      setClientCardOn(!clientCardOn)
      fetch(`/clients/${client.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      }).then(()=>{
        const newClientList = clients.filter((c)=>c.id!==parseInt(client.id))
        setClients(newClientList)
      })
    }
  }
 
  function handleExerciseDelete(e){
    console.log(parseInt(e.target.id))
    fetch(`/client_exercises/${parseInt(e.target.id)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(()=>{
      const filteredExercises = clientExercises.filter((ex)=>ex.id!==parseInt(e.target.id))
      setClientExercises(filteredExercises)
    })
  }


  const clientExerciseList = clientExercises.map((e)=><div key={e.id}><p>{e.name}<button key={e.id} id={e.id} onClick={handleExerciseDelete}>remove</button></p></div>)
  
  return(
    <div className="client-card">
      <h3>{clientInfo.name}</h3>
      <p>Email: {clientInfo.email}</p>
      <p>Stats: {clientInfo.age} years, {clientInfo.feet} ft. {clientInfo.inches} in., {clientInfo.weight} lbs</p>
      <p>{clientInfo.fitness_level}, {clientInfo.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>{editFormOpen ? "Close Edit Client" : "Edit Client"}</button>
      <button onClick={handleDelete}>Delete Client</button>
      <div>{editFormOpen ? <EditForm client = {client} clients = {clients} setClients = {setClients} editForm={editFormOpen} setEditForm={setEditFormOpen} clientInfo={clientInfo} setClientInfo={setClientInfo}/> : ""}</div>
      <div className="client-workouts">
        <p>Last three workouts (click for more details):</p>
        <div>
          {clientRecentWorkouts}
        </div>
      <div>
      <button onClick={()=>setWorkoutOptionsOn(!workoutOptionsOn)}>Set your client's next workout:</button>
        {workoutOptionsOn ?  <WorkoutOptions client={client} workoutOptionsOn={workoutOptionsOn} setWorkoutOptionsOn={setWorkoutOptionsOn} clientWorkouts={clientWorkouts} setClientWorkouts={setClientWorkouts} confirm={confirm} setConfirm={setConfirm}/> : ""}
        </div>
        <NavLink to="/newworkout">OR create a new workout above.</NavLink>
      </div>
      <div>
        <h4>This Client's Exercise Rep:</h4>
        {clientExerciseList}
      </div>
    </div>
  )
}

export default ClientCard