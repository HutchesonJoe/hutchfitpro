import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CurrentBlock } from "./CurrentBlock";
import { RestTimer } from "./RestTimer";
import { SetCount, Console } from '../styles/WorkoutStyles'
import { CurrentWorkoutContext } from "../context/CurrentWorkoutContext";

export const ActivateWorkout = () => {
  const [user] = useContext(UserContext)
  const [workout, setWorkout] = useState(user.workouts.filter((wrkt)=>wrkt.completed===false)[0] || user.workouts[user.workouts.length - 1])
  const [index, setIndex] = useState(0)
  const [currentBlock, setCurrentBlock] = useState(workout && workout.blocks[index])
  const [blockNumber, setBlockNumber] = useState(1)
  const [setNumber, setSetNumber] = useState(1)
  const[numberOfSets, setNumberOfSets] = useState(currentBlock && parseInt(currentBlock.sets.split(' ')[0]))
  const [returnDisplay, setReturnDisplay] = useState("Loading")
  const navigate = useNavigate()
  
  
  useEffect(()=>{
    if(setNumber === numberOfSets + 1){
      setIndex(index + 1)
      setBlockNumber(blockNumber + 1)
    } 
  },[setNumber])

  useEffect(()=>{
      setCurrentBlock(workout.blocks[index])
      setSetNumber(1)
      if(workout.blocks[index]){
        setNumberOfSets(parseInt(workout.blocks[index].sets.split(' ')[0]))
      }
  },[index])

  const markComplete = () => {
    fetch(`workouts/${workout.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true
      })
      })
        .then(r=>r.json())
        .then(wkout=>{
          setWorkout(wkout)
          navigate("/main")
        })
  }
  
  useEffect(()=>{
 
  let display 
    if (workout && workout.blocks.length===index){

      display = (
        <>
        <p>Congrats, {user.first_name}! Well done.</p>
        <button onClick={markComplete}>Record workout completed</button>
        </>
      )
    } else {
      display = (
        <>
          <CurrentBlock currentBlock={currentBlock} blockNumber={blockNumber} workoutTitle={workout.title}/>
          <Console>
          <SetCount>Set {setNumber} of {numberOfSets}</SetCount>
          <RestTimer setNumber = {setNumber} setSetNumber = {setSetNumber}/> 
          </Console>
        </>
      )
    }
    setReturnDisplay(display)
  },[setNumber, index])
  

  return(
    <div>
      {returnDisplay}
    </div>
    
  )
}

export default ActivateWorkout;
