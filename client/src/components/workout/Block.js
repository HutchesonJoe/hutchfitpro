import Exercise from '../cards/Exercise';
import { useEffect, useState, useContext } from "react";
import { ExerciseRepContext } from '../context/ExerciseRepContext';

function Block({block}){
  const[exerciseRep] = useContext(ExerciseRepContext)
  console.log(block)
  const exerciseList =  block.workout_exercises.map((ex)=>{
      
      const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)
      return (
        <Exercise exercise={exercise}/>
      )
  })

  
  
  return(
    <div className="block">
      <div>{block.count}, {block.sets} rounds</div>
      {exerciseList}
    </div>
  )
}

export default Block