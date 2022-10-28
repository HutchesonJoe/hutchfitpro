import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CurrentBlock } from "./CurrentBlock";
import { RestTimer } from "./RestTimer";
import { WarmUp } from "./WarmUp"

export const ActivateWorkout = () => {
  const [user] = useContext(UserContext)
  const [workout, setWorkout] = useState(user.workouts.filter((wrkt)=>wrkt.completed===false)[0])
  const [warmUpLength, setWarmUpLength] = useState()
  const [index, setIndex] = useState(0)
  // const [blocks, setBlocks] = useState([])
  const [currentBlock, setCurrentBlock] = useState()
  const [blockNumber, setBlockNumber] = useState(1)
  const[setNumber, setSetNumber] = useState(1)
  const[numberOfSets, setNumberOfSets] = useState()
  const [timerOn, setTimerOn] = useState(false)
  const [returnDisplay, setReturnDisplay] = useState("Loading")
  // const navigate = useNavigate()

  useEffect(()=>{
    if(workout){
      setCurrentBlock(workout.blocks[index])
      setBlockNumber(index + 1)
    }
  },[workout, index])

  useEffect(()=>{
    if(currentBlock){
      let number = parseInt(currentBlock.sets.split(' ')[0])
      setNumberOfSets(number)
    }
  },[currentBlock])

  if(setNumber === numberOfSets + 1){
    setSetNumber(1)
    setIndex(index + 1)
    setCurrentBlock(workout.blocks[index])
  } 

const nextSet = () => {
    setTimerOn(false)
    setSetNumber(setNumber + 1)
}

const completeSet = () => {
  setTimerOn(true)
  }

useEffect(()=>{
  let display 
    if(warmUpLength!==0 || undefined){
      display = <WarmUp warmUpLength={warmUpLength} setWarmUpLength={setWarmUpLength}/>
      
    } else if (currentBlock && workout.blocks.length===index){
      display = "Congratulations! Well done."
      //here I can allow clients to leave feedback
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
          .then(wkout=>setWorkout(wkout))
    } else {
      display = (
        <>
          <CurrentBlock currentBlock={currentBlock} blockNumber={blockNumber}/>
          <p>Set {setNumber} of {numberOfSets}</p>
          {timerOn ? <RestTimer setTimerOn={setTimerOn} setNumber={setNumber} setSetNumber={setSetNumber}/> : <button onClick={setTimerOn}>Click to Complete Set</button>}
        </>
      )
    }
    setReturnDisplay(display)
  },[workout, index])
  

  return(
    <div>
      {returnDisplay}
    </div>
    
  )
}

export default ActivateWorkout;
