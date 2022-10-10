import Exercise from '../cards/Exercise';
import { useEffect, useState, useContext } from "react";
import { ExerciseRepContext } from '../context/ExerciseRepContext';
import { UserContext } from '../context/UserContext';

function Block({block, blockNumber}){
  
  const[user] = useContext(UserContext)
  const[thisBlock, setThisBlock] = useState([])
  const[workoutExercises, setWorkoutExercises] = useState()

  useEffect(()=>{
    fetch(`blocks/${block.id}`)
    .then(r=>r.json())
    .then(data=>{
      setWorkoutExercises(data.workout_exercises)
      setThisBlock(data)
    })
  },[block])
  
  let exerciseList

  if(workoutExercises){
    exerciseList =  workoutExercises.map((ex)=>{
      const clientExercise = user.client_exercises.find((x)=>x.exercise_id===ex.exercise_id)

      return (
        <li key={clientExercise.id} >{clientExercise.exercise.name}, {clientExercise.exercise.category}</li>
      )
      })
    }
  
  return(
    <div className="block">
      <p>Block {blockNumber}</p>
      <div><em>{block.count}, {block.sets} rounds</em></div>
      <br/>
      {exerciseList}
    </div>
  )
}

export default Block