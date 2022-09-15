import Exercise from '../cards/Exercise';
import { useEffect, useState, useContext } from "react";
import { ExerciseRepContext } from '../context/ExerciseRepContext';
import { UserContext } from '../context/UserContext';

function Block({block}){
  const[exerciseRep] = useContext(ExerciseRepContext)
  const[user] = useContext(UserContext)
  const[thisBlock, setThisBlock] = useState([])
  
  useEffect(()=>{
    fetch(`blocks/${block.id}`)
    .then(r=>r.json())
    .then(data=>setThisBlock(data))
  },[block])
  
  let exerciseList

  if(thisBlock.length!==0){
    
    exerciseList =  thisBlock.workout_exercises.map((ex)=>{
      const clientExercise = user.client_exercises.find((x)=>x.id===ex.exercise_id)
      
      return (
        <Exercise clientExercise={clientExercise}/>
      )
      })
    }
  
  return(
    <div className="block">
      <div>{block.count}, {block.sets} rounds</div>
      {exerciseList}
    </div>
  )
}

export default Block