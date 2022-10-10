import { useEffect, useState, useContext } from "react";
import Exercise from "../cards/Exercise";
import { UserContext } from "../context/UserContext";

function CurrentBlock({currentBlock}){
 const [user] = useContext(UserContext)
 const [block, setBlock] = useState()
 const [setNumber, setSetNumber] = useState(1)
 const [blockReturn, setBlockReturn] = useState("Loading...")
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


  return(
    <>
     {blockReturn}
     {numberOfSets>=setNumber ? 
        <button type="button" onClick={()=>setSetNumber(setNumber+1)}>Click to Complete Set {setNumber} of {currentBlock.sets}</button> 
        : <h2>Well done!</h2>

     }
    </>
  )

}



export default CurrentBlock;