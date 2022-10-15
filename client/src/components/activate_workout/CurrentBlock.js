import { useEffect, useState, useContext } from "react";
import Exercise from "../cards/Exercise";
import { UserContext } from "../context/UserContext";

function CurrentBlock({currentBlock, setTimerStarted}){
 const [user] = useContext(UserContext)
 const [block, setBlock] = useState()
 const [setNumber, setSetNumber] = useState(1)
 const [blockReturn, setBlockReturn] = useState("Loading...")
 const counter =  <button type="button" className="timer-button" onClick={handleClick}>Complete<br/>Set {setNumber} of {currentBlock.sets}</button>
 const resting = <div className="resting">Resting...</div>   
 const [counterButton, setCounterButton] = useState(counter)
//this is not quit working...I need the timer to go away when it's done. Connect with the set count?
 useEffect(()=>{
  fetch(`/blocks/${currentBlock.id}`)
    .then(r=>r.json())
    .then(bl=>setBlock(bl))
  },[currentBlock])
const numberOfSets = parseInt(currentBlock.sets.split(' ')[0])

useEffect(()=>{
  const {count, sets, note} = currentBlock
  if(block){
    const thisBlock  = (
      <div className="block">
      <h3>{count} of each exercise, {sets} </h3>
      {note ? <h3><em>Trainer note: {note}</em></h3> : null}
      <div>{block.workout_exercises.map((ex)=>{
        let exercise = user.client_exercises.find((x)=>x.exercise_id===ex.exercise_id)
       return <Exercise key={exercise.id} clientExercise={exercise}/>
      })}
      </div>
      </div>
    )
  setBlockReturn(thisBlock)
  }
 },[block])



function hitTimer(){
  setCounterButton(resting)
  setSetNumber(setNumber + 1)
  let timer = setInterval(()=>{
    clearInterval(timer)
    setTimerStarted(false)
    setCounterButton(counter)
  }, 30000)
}

function handleClick(){
  setSetNumber(setNumber+1)
  hitTimer()
}

return(
  <>
    {blockReturn}
    {numberOfSets>=setNumber ? counterButton : <h2>Well done!</h2>
    }
  </>
  )

}



export default CurrentBlock;