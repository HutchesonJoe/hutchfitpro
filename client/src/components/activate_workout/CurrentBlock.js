import { useContext, useEffect } from "react";
import Exercise from "../cards/Exercise";
import { useState } from 'react';
import { UserContext } from "../context/UserContext";
import { WorkoutTitle, Instructions, Card, BlockNumber, RepsAndSets } from "../styles/WorkoutStyles";

export const CurrentBlock = ({currentBlock, blockNumber, workoutTitle}) => {

const[user] = useContext(UserContext)
const [blockExercises, setBlockExercises] = useState([])

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
  <Card>
    <WorkoutTitle>{workoutTitle}</WorkoutTitle>
    <Instructions>Complete all repetitions of each exercise, back to back, then rest.</Instructions>
    <BlockNumber>Block {blockNumber}</BlockNumber>
    <RepsAndSets>{currentBlock.count}, {currentBlock.sets}</RepsAndSets>
    {currentBlock ? currentBlock.note : ''}
    {exercises}
  </Card>
  )

}



