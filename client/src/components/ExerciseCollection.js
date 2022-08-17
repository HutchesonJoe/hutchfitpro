import { useContext, useEffect, useState } from 'react';
import { ExerciseRepContext } from './context/ExerciseRepContext';
import CreateExerciseForm from './CreateExerciseForm';
import Exercise from './cards/Exercise';
// import Errors from './Errors';

function ExerciseCollection({thisClient, clientExercises, setClientExercises, filteredExerciseRep, setFilteredExerciseRep}){
  const [exerciseRep, setExerciseRep] = useContext(ExerciseRepContext)
  const [createExOn, setCreateExOn] = useState(false)
  // const [errors, setErrors] = useState([])

  let exerciseList = exerciseRep.map((x)=><Exercise exercise={x} key={x.id} thisClient={thisClient} clientExercises={clientExercises} setClientExercises={setClientExercises} filteredExerciseRep={filteredExerciseRep} setFilteredExerciseRep={setFilteredExerciseRep}/>)

  
  return(
    <div id="exercise-collection">
      <h3>Exercise Collection</h3>
      <button onClick={()=>setCreateExOn(!createExOn)}>{createExOn ? "Close" : "Add Exercise to List"}</button>
      {/* this (below) does not change the actually cotext, but the filtered list on the Trainer home page.  */}
      {createExOn ? <CreateExerciseForm exerciseRep={filteredExerciseRep} setExerciseRep={setFilteredExerciseRep} setCreateExOn={setCreateExOn}/> : null}
      {exerciseList}
    </div>
  )
}

export default ExerciseCollection