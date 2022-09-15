import { useState, useEffect, useContext } from 'react';
import EditForm from '../EditForm';
import NewWorkoutForm from '../NewWorkout/NewWorkoutForm';
import { ExerciseRepContext } from '../context/ExerciseRepContext';
import { ThisClientContext } from '../context/ThisClientContext';
import LastThreeWorkouts from './LastThreeWorkouts';

function ClientCard({clients, setClients, clientCardOn, setClientCardOn}){
  const[editFormOpen, setEditFormOpen] = useState(false)
  const[exerciseRep] = useContext(ExerciseRepContext)
  const[workoutFormOn, setWorkoutFormOn] = useState(false)
  const[thisClient, setThisClient] = useContext(ThisClientContext)
  console.log(thisClient)
  
  //this maybe doesn't need a useEffect? We wouldn't be able to open the client card if there was not a client. 
  // useEffect(()=>{
  //   if(thisClient){
  //     card = (
  //       <div className="client-card">
  //     <h3>{thisClient.first_name}</h3>
  //     <p>Email: {thisClient.email}</p>
  //     <p>Stats: {thisClient.age} years, {thisClient.feet} ft. {thisClient.inches} in., {thisClient.weight} lbs</p>
  //     <p>{thisClient.fitness_level}, {thisClient.workouts_per_week} workouts per week</p>
  //     <button onClick={handleEdit}>{editFormOpen ? "Close Edit Client" : "Edit Client"}</button>
  //     <button onClick={handleDelete}>Delete Client</button>
  //     <div>{editFormOpen ? <EditForm client = {thisClient} clients = {clients} setClients = {setClients} editForm={editFormOpen} setEditForm={setEditFormOpen}/> : ""}</div>
  //     <div className="client-workouts">
  //       <p>Last three workouts (click for more details):</p>
  //       <LastThreeWorkouts/>
  //     </div>
  //     <div>
  //     <button onClick={()=>setWorkoutFormOn(!workoutFormOn)}>{workoutFormOn ? "Close" : "Set this client's next workout"}</button>
  //     <div id="new-workout-form">{workoutFormOn ? <NewWorkoutForm client={thisClient}/> : null}</div>
  //     </div>
  //   </div>
  //     )
  //   } else {
  //     card = (
  //       <div>
  //         Loading...
  //       </div>
  //     )
  //   }
  // },[thisClient])
   
  function handleEdit(){
    setEditFormOpen(!editFormOpen)
  }

  function handleDelete(){
    const deleteConfirm = window.confirm("Are you sure you want to delete this client? You CANNOT undo this action.")

    if (deleteConfirm){
      setClientCardOn(!clientCardOn)
      fetch(`/clients/${thisClient.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      }).then(()=>{
        const newClientList = clients.filter((c)=>c.id!==parseInt(thisClient.id))
        setClients(newClientList)
      })
    }
  }

  
  return(
    <div>
      <div className="client-card">
      <h3>{thisClient.first_name}</h3>
      <p>Email: {thisClient.email}</p>
      <p>Stats: {thisClient.age} years, {thisClient.feet} ft. {thisClient.inches} in., {thisClient.weight} lbs</p>
      <p>{thisClient.fitness_level}, {thisClient.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>{editFormOpen ? "Close Edit Client" : "Edit Client"}</button>
      <button onClick={handleDelete}>Delete Client</button>
      <div>{editFormOpen ? <EditForm client = {thisClient} clients = {clients} setClients = {setClients} editForm={editFormOpen} setEditForm={setEditFormOpen}/> : ""}</div>
      <div className="client-workouts">
        <p>Last three workouts (click for more details):</p>
        <LastThreeWorkouts/>
      </div>
      <div>
        <button onClick={()=>setWorkoutFormOn(!workoutFormOn)}>{workoutFormOn ? "Close" : "Set this client's next workout"}</button>
        <div id="new-workout-form">{workoutFormOn ? <NewWorkoutForm client={thisClient}/> : null}</div>
        </div>
        <button onClick={()=>setClientCardOn(!clientCardOn)}>Back to Clients</button>

      </div>
        
    </div>
    
  )
}

export default ClientCard