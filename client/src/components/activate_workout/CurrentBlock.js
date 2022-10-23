import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Exercise from "../cards/Exercise";
import { UserContext } from "../context/UserContext";

export const CurrentBlock = ({blocks, index}) => {
const[user] = useContext(UserContext)
const navigate = useNavigate()

if(blocks.length !==0 && index===blocks.length){
  navigate("/clienthome")
}

const clientExercises = blocks[index].workout_exercises.map((exercise) => user.client_exercises.find((exer)=>exer.exercise_id===exercise.exercise_id))
const blockExercises = clientExercises.map((clientExercise)=><Exercise key={clientExercise.id} clientExercise={clientExercise}/>)

return(
  <>
    <p>Complete all repetitions of each exercise, back to back, then rest...</p>
    <p>Block{index + 1}</p>
    {blockExercises}
  </>
  )

}



export default CurrentBlock;