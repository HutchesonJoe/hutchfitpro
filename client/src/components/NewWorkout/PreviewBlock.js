import { useContext } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";

function PreviewBlock({block}){
  console.log(block)
  const [exerciseRep] = useContext(ExerciseRepContext)

  const exercises =  block.workout_exercises.map((ex)=>{
   
    const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)
    console.log(exercise)
    return (
      <li>{exercise.name}</li>
    )
})

  // const exercises = block.workout_exercises.map((ex)=><li>{ex.title}</li>)
return (
  <div>
    <ul>
      {exercises}
    </ul>
  </div>
)
}

export default PreviewBlock