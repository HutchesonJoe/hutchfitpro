import { useContext, useEffect, useState } from 'react';
import { ExerciseRepContext } from './context/ExerciseRepContext';
import CreateExerciseForm from './CreateExerciseForm';
import Exercise from './cards/Exercise';
// import Errors from './Errors';

function ExerciseCollection({thisClient, clientExercises, setClientExercises, filteredExerciseRep, setFilteredExerciseRep}){
  const [exerciseRep, setExerciseRep] = useContext(ExerciseRepContext)
  const [createExOn, setCreateExOn] = useState(false)
  const [instructionsOn, setInstructionsOn] = useState(false)
  // const [errors, setErrors] = useState([])
  
  //create a new component called ExerciseForCollection.js which takes in each exercise for this collection and deals with it the way I need it for this collection, i.e. view exercise, edit exercise, etc. 
  
  let exerciseList = exerciseRep.map((x)=>{
    
    function showInstructions(){
      setInstructionsOn(!instructionsOn)
    }
    return (
      <div key={x.id}>
        <li style={{ width: '100%'}} onClick={showInstructions}>{x.name}, <em>{x.category}</em><br/>
          
            {instructionsOn ? 
            <div style={{color: "black", border: "2px solid", margin: "10px"}}>
            {x.instructions}
            </div>
            : null}
          
        </li>
        
      </div>
      )
  })

  
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