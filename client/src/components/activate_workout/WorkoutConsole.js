import { useState } from 'react'
import { RestTimer } from './RestTimer'

export const WorkoutConsole = ({index, nextBlock, blocks}) => {
  const[setNumber, setSetNumber] = useState(1)
  const [timerOn, setTimerOn] = useState(false)
  let numberOfSets 
  
  if(blocks[index].sets){
    numberOfSets = parseInt(blocks[index].sets.split(' ')[0])
  }

  if(setNumber === numberOfSets + 1){
    nextBlock()
    setSetNumber(1)
  }
  
  const completeSet = () => {
    setTimerOn(true)
  }

  return (
    <>
    <p>Set {setNumber} of {numberOfSets}</p>
    {timerOn ? <RestTimer setTimerOn={setTimerOn} setSetNumber={setSetNumber} setNumber={setNumber}/> : <button onClick={completeSet}>Click to Complete Set</button>}
    </>
  )
}