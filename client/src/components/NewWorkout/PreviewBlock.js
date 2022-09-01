import { useContext } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";

function PreviewBlock({block}){
  console.log(block)
  const [exerciseRep] = useContext(ExerciseRepContext)

  const exercises =  block.workout_exercises.map((ex)=>{
   
    const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)
    
    return (
      <li key = {exercise.id}>{exercise.name}</li>
    )
})

  // const exercises = block.workout_exercises.map((ex)=><li>{ex.title}</li>)
return (
  <div>
    <p>{block.count}, {block.sets}</p>
    <ul>
      {exercises}
    </ul>
  </div>
)
}

export default PreviewBlock