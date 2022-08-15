import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import EditForm from '../EditForm';
import WorkoutOptions from '../WorkoutOptions';
import Workout from '../Workout'
import NewWorkoutForm from '../NewWorkout/NewWorkoutForm';

function ClientCard({client, clients, setClients, clientCardOn, setClientCardOn, clientExercises, setClientExercises, filteredExerciseRep, setFilteredExerciseRep}){
  const[editFormOpen, setEditFormOpen] = useState(false)
  // const[workoutOptionsOn, setWorkoutOptionsOn] = useState(false)
  const[clientWorkouts, setClientWorkouts] = useState([])
  // const[confirm, setConfirm] = useState(false)
  const[clientInfo, setClientInfo] = useState(client)
  const[workoutFormOn, setWorkoutFormOn] = useState(false)
  
  console.log(clientExercises)
  useEffect(()=>{
      setClientWorkouts(client.workouts);
      // setClientExercises(client.client_exercises)
  },[client])
   
  function handleEdit(){
    setEditFormOpen(!editFormOpen)
  }

  //move the workout history into it's own component. 
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
    
    fetch(`/client_exercises/${parseInt(e.target.id)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(()=>{
      const filteredClientExercises = clientExercises.filter((ex)=>ex.id!==parseInt(e.target.id))
      // const filteredExerciseRep = exerciseRep.push(())
      //this is NOT working. Need to add this exercise back to the filtered list. 
      setClientExercises(filteredClientExercises)
    })
  }

  let exerciseList
  if(clientExercises){
    exerciseList = clientExercises.map((e)=><div key={e.id}><p>{e.name}<button key={e.id} id={e.id} onClick={handleExerciseDelete}>remove</button></p></div>)
  }
  
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
      
        {/* <NavLink to="/newworkout">OR create a new workout above.</NavLink> */}
      </div>
      <div>
      <button onClick={()=>setWorkoutFormOn(!workoutFormOn)}>{workoutFormOn ? "Close" : "Set this client's next workout"}</button>
      {workoutFormOn ? <NewWorkoutForm clientExercises={clientExercises}/> : null}
        {/* {workoutOptionsOn ?  <WorkoutOptions client={client} workoutOptionsOn={workoutOptionsOn} setWorkoutOptionsOn={setWorkoutOptionsOn} clientWorkouts={clientWorkouts} setClientWorkouts={setClientWorkouts} confirm={confirm} setConfirm={setConfirm}/> : ""} */}
        </div>
      <div>
        <h4>This Client's Exercise Rep:</h4>
        {exerciseList}
      </div>
    </div>
  )
}

export default ClientCard