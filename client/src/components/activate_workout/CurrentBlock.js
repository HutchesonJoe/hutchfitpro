import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Exercise from "../cards/Exercise";
import { useState } from 'react';
import { UserContext } from "../context/UserContext";
import { WorkoutConsole } from "./WorkoutConsole";
import { CurrentWorkoutContext } from "../context/CurrentWorkoutContext";


export const CurrentBlock = ({currentBlock, blockNumber}) => {

const[user] = useContext(UserContext)
const [clientExercises, setClientExercises] = useState([])
const [blockExercises, setBlockExercises] = useState([])
const navigate = useNavigate()
const workout = useContext(CurrentWorkoutContext)

useEffect(()=>{
  if(currentBlock && currentBlock.id){
    fetch(`blocks/${currentBlock.id}`)
    .then(r=>r.json())
    .then(block=>setBlockExercises(block.workout_exercises))
  }
  },[currentBlock])

let exercises
if(blockExercises){
  const clientExercises = blockExercises.map((exercise)=>{
    
    return user.client_exercises.find((ex)=>exercise.exercise_id===ex.exercise_id)
  })
 
  exercises = clientExercises.map((exercise)=><Exercise key={exercise.id} clientExercise={exercise}/>)
}

return(
  <>
    <p>Complete all repetitions of each exercise, back to back, then rest...</p>
    <h2>Block {blockNumber}</h2>
    <h4>{currentBlock.note}</h4>
    {exercises}
  </>
  )

}



