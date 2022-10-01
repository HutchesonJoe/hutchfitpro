import { useEffect, useState } from "react";
import CurrentBlock from "./CurrentBlock";

function ActivateWorkout({workout}){
  const[blocks, setBlocks] = useState()
  const[block, setBlock] = useState()
  const[indx, setIndex] = useState(0)
  const[workoutExArr, setWorkoutExArr] = useState([])
  const[exercises, setExercises] = useState([])
  const[thisBlock, setThisBlock] = useState()
  console.log(thisBlock)
  let index = 0
  useEffect(()=>{
    if(workout){
      setBlocks(workout.blocks)
    }
  }, [workout])

  useEffect(()=>{
    if(blocks){
      setBlock(blocks[indx])
    }
  },[indx])

  useEffect(()=>{
    if(block){
      fetch(`/blocks/${block.id}`)
        .then(r=>r.json())
        .then(b=>setWorkoutExArr(b.workout_exercises))
    }
  },[block])

  useEffect(()=>{
    if(workoutExArr){
      workoutExArr.map((ex)=>{
        fetch(`/exercises/${ex.id}`)
          .then(r=>r.json)
          .then(exercise => setExercises([...exercises, exercise]))
      })
    }
  },[workoutExArr])

  useEffect(()=>{
    if(exercises){
      const exArr = exercises.map((ex)=>{
        return(
          <div>
            <p>ex.name</p>
          </div>
        )
        })
      setThisBlock(exArr)
    }
  },[])
  
  return(
    <div>
      <CurrentBlock currentBlock = {thisBlock}/>
    </div>
  )
}

export default ActivateWorkout;
