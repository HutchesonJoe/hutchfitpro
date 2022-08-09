import { useContext, useEffect, useState } from 'react';
import { ExerciseRepContext } from './context/ExerciseRepContext';
import CreateExerciseForm from './CreateExerciseForm';
import Exercise from './cards/Exercise';
import Errors from './Errors';

function ExerciseCollection({thisClient, clientExercises, setClientExercises}){
  
  const [exerciseRep, setExerciseRep] = useContext(ExerciseRepContext)
  const [clientSpecRep, setClientSpecRep] = useState([])
  const [createExOn, setCreateExOn] = useState(false)
  const [errors, setErrors] = useState([])

  let exerciseList
  //not quite working
  useEffect(()=>{

    setClientSpecRep(exerciseRep)
   
  },[clientExercises])
  
  if(exerciseRep.length!==0){
    exerciseList = clientSpecRep.map((x)=><Exercise exercise={x} key={x.id} thisClient={thisClient} clientExercises={clientExercises} setClientExercises={setClientExercises} exerciseRep={exerciseRep} setExerciseRep={setExerciseRep}/>)
  }

  return(
    <div id="exercise-collection">
      <h3>Exercise Collection</h3>
      <button onClick={()=>setCreateExOn(!createExOn)}>{createExOn ? "Close" : "Add Exercise to List"}</button>
      {createExOn ? <CreateExerciseForm exerciseRep={exerciseRep} setExerciseRep={setExerciseRep} setCreateExOn={setCreateExOn}/> : null}
      {exerciseList}
    </div>
  )
}

export default ExerciseCollection