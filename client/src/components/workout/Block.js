import Exercise from '../cards/Exercise';
import { useEffect, useState, useContext } from "react";
import { ExerciseRepContext } from '../context/ExerciseRepContext';

function Block({block}){
  const[exerciseRep] = useContext(ExerciseRepContext)
  
  const exerciseList =  block.workout_exercises.map((ex)=>{
      // console.log(ex)
      const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)
      return (
        <Exercise exercise={exercise}/>
      )
    })

  
  
  return(
    <div className="block">
      Block
      {exerciseList}
    </div>
  )
}

export default Block