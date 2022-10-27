import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentWorkoutContext } from "../context/CurrentWorkoutContext";
import { CurrentBlock } from "./CurrentBlock";
import { WarmUp } from "./WarmUp"

export const ActivateWorkout = () => {
  const workout  = useContext(CurrentWorkoutContext)
  const [warmUpLength, setWarmUpLength] = useState()
  const [index, setIndex] = useState(0)
  // const [blocks, setBlocks] = useState([])
  const [currentBlock, setCurrentBlock] = useState()
  const [blockNumber, setBlockNumber] = useState(1)
  const[setNumber, setSetNumber] = useState(1)
  const[numberOfSets, setNumberOfSets] = useState()
  const [timerOn, setTimerOn] = useState(false)
  const[seconds, setSeconds] = useState(30)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(workout){
      setCurrentBlock(workout.blocks[index])
    }
  },[workout])

  if(workout && workout.blocks.length===index){
    returnDisplay = "Congratulations! Well done."
  }

  useEffect(()=>{
    if(currentBlock){
      let number = parseInt(currentBlock.sets.split(' ')[0])
      setNumberOfSets(number)
    }
  },[currentBlock])

  let returnDisplay = "Loading"

  if(setNumber === numberOfSets + 1){
    setSetNumber(1)
    setIndex(index + 1)
    setCurrentBlock(workout.blocks[index])
  } 

  const startTimer = () => {
    let interval 
    if(seconds > 0){
      interval = setTimeout(()=> setSeconds(seconds - 1), 1000)
    } else {
      nextSet()
    }
    return  () => {
      clearTimeout(interval)
      }
  }
  
  const completeSet = () => {
    startTimer()
    setTimerOn(true)
  }

  const nextSet = () => {
      setTimerOn(false)
      setSetNumber(setNumber + 1)
  }

  const nextBlock = () =>{
    setBlockNumber(blockNumber + 1)
    setIndex(index + 1)
  }

  useEffect(()=>{
    if(workout){
      setCurrentBlock(workout.blocks[index])
    }
  },[workout, index])

  if(warmUpLength!==0){
    returnDisplay = <WarmUp warmUpLength={warmUpLength} setWarmUpLength={setWarmUpLength}/>
  } else {
    returnDisplay = (
      <>
        <CurrentBlock currentBlock={currentBlock} blockNumber={blockNumber}/>
        <p>Set {setNumber} of {numberOfSets}</p>
        {timerOn ? <p>Rest :{seconds} seconds</p> : <button onClick={completeSet}>Click to Complete Set</button>}
    
        <button onClick = {nextSet} >Skip Rest</button>
        {/* <WorkoutConsole currentBlock={currentBlock} nextBlock={nextBlock}/> */}
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
