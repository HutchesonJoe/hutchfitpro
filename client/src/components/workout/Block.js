import Exercise from '../cards/Exercise';
import { useEffect, useState, useContext } from "react";
import { ExerciseRepContext } from '../context/ExerciseRepContext';

function Block({block, newWorkoutExercises}){
  const[exerciseRep] = useContext(ExerciseRepContext)
  const[exercises, setExercises] = useState([])
  // console.log(block)
  // let exerciseList
  // useEffect(()=>{
  //   setExercises(block.workout_exercises)
  // },[])

  // useEffect(()=>{
    const exerciseList =  block.workout_exercises.map((ex)=><Exercise key={ex.id} exercise={ex}/>)
    console.log(exerciseList)
  // },[exercises])
  
  
  return(
    <div className="block">
      Block
      {exerciseList}
    </div>
  )
}

export default Block