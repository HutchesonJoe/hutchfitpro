import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentWorkoutContext } from "../context/CurrentWorkoutContext";
import { UserContext } from "../context/UserContext";
import CurrentBlock from "./CurrentBlock";
import { WarmUp } from "./WarmUp"
import { WorkoutConsole } from "./WorkoutConsole"

export const ActivateWorkout = () => {
  const [workout]  = useContext(CurrentWorkoutContext)
  const [blocks, setBlocks] = useState([])
  const [warmUpLength, setWarmUpLength] = useState()
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()
  
  // if(blocks.length!==0 && index===blocks.length){
  //   console.log(index, blocks.length)
  //   navigate(-1)
  // }


  useEffect(()=>{
    if(workout){
      let newBlocks = []
    workout.blocks.forEach((block)=>{
      fetch(`blocks/${block.id}`)
        .then(r=>r.json())
        .then(data=>newBlocks.push(data))
    })
    setBlocks(newBlocks)}
    // if(blocks.length !==0 && index===blocks.length){
    //   navigate("/clienthome")
    // }
  },[workout])

  let returnDisplay = "Loading"

  const nextBlock = ()=>{
    setIndex(index + 1)
  }
  if(warmUpLength!==0){
    returnDisplay = <WarmUp warmUpLength={warmUpLength} setWarmUpLength={setWarmUpLength}/>
  } else {
    returnDisplay = (
      <>
        <CurrentBlock blocks = {blocks} index={index}/>
        <WorkoutConsole index={index} nextBlock={nextBlock} blocks={blocks}/>
      </>
    )
  }

  return(
    <div>
      {returnDisplay}
    </div>
    
  )
}

export default ActivateWorkout;
