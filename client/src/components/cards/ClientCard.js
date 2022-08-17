import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import EditForm from '../EditForm';
import WorkoutOptions from '../WorkoutOptions';
import Workout from '../workout/Workout'
import NewWorkoutForm from '../NewWorkout/NewWorkoutForm';
import { ExerciseRepContext } from '../context/ExerciseRepContext';
import { ThisClientContext } from '../context/ThisClientContext';

function ClientCard({clients, setClients, clientCardOn, setClientCardOn}){
  const[editFormOpen, setEditFormOpen] = useState(false)
  const[exerciseRep] = useContext(ExerciseRepContext)
  // const[clientWorkouts, setClientWorkouts] = useState([])
  // const[clientInfo, setClientInfo] = useState(client)
  const[workoutFormOn, setWorkoutFormOn] = useState(false)
  const[thisClient, setThisClient] = useContext(ThisClientContext)

  // useEffect(()=>{
  //   const exIds = clientRep.map(ex=>ex.exercise_id)
  //   const thisRep = []
  //   exerciseRep.map(ex=>{
  //     if(exIds.includes(ex.id)){
  //       thisRep.push(ex)
  //     }
  //   })
  //   setClientRep(thisRep)
    
  // },[])
   
  function handleEdit(){
    setEditFormOpen(!editFormOpen)
  }

  //move the workout history into it's own component. 
  // const lastThreeWorkouts = clientWorkouts.slice(-3)
  // const clientRecentWorkouts = lastThreeWorkouts.map((workout)=><Workout workout={workout} key={workout.id}/>)

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
    <div className="client-card">
      <h3>{thisClient.name}</h3>
      <p>Email: {thisClient.email}</p>
      <p>Stats: {thisClient.age} years, {thisClient.feet} ft. {thisClient.inches} in., {thisClient.weight} lbs</p>
      <p>{thisClient.fitness_level}, {thisClient.workouts_per_week} workouts per week</p>
      <button onClick={handleEdit}>{editFormOpen ? "Close Edit Client" : "Edit Client"}</button>
      <button onClick={handleDelete}>Delete Client</button>
      <div>{editFormOpen ? <EditForm client = {thisClient} clients = {clients} setClients = {setClients} editForm={editFormOpen} setEditForm={setEditFormOpen}/> : ""}</div>
      <div className="client-workouts">
        <p>Last three workouts (click for more details):</p>
        {/* <div>
          {clientRecentWorkouts}
        </div> */}
      
        {/* <NavLink to="/newworkout">OR create a new workout above.</NavLink> */}
      </div>
      <div>
      <button onClick={()=>setWorkoutFormOn(!workoutFormOn)}>{workoutFormOn ? "Close" : "Set this client's next workout"}</button>
      <div id="new-workout-form">{workoutFormOn ? <NewWorkoutForm client={thisClient}/> : null}</div>
        {/* {workoutOptionsOn ?  <WorkoutOptions client={client} workoutOptionsOn={workoutOptionsOn} setWorkoutOptionsOn={setWorkoutOptionsOn} clientWorkouts={clientWorkouts} setClientWorkouts={setClientWorkouts} confirm={confirm} setConfirm={setConfirm}/> : ""} */}
        </div>
      <div>
      </div>
    </div>
  )
}

export default ClientCard