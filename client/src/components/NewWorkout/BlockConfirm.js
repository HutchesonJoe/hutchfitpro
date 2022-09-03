import { useState, useContext, useEffect } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { ThisClientContext } from "../context/ThisClientContext";

function BlockConfirm({block}){
  const[thisClient] = useContext(ThisClientContext)
  const[clientExArr, setClientExArr] = useState([])
  const[exerciseRep] = useContext(ExerciseRepContext)
  const[exWeight, setExWeight] = useState("")
  console.log(clientExArr)
  console.log(exerciseRep)
  //would I use state to reset the component for weight? When the weight is assigned/selected, store this in state, use the value to PATCH.
  useEffect(()=>{
    let arr = [] 

    block.workout_exercises.map((ex)=>{
      const exercise = thisClient.client_exercises.find((x)=>x.exercise_id===ex.exercise_id)
      
      if(exercise){
        arr.push(exercise)
      } else {
        const newExercise = {
          client_id : thisClient.id,
          exercise_id : ex.exercise_id
        }
        console.log(newExercise)
        fetch('/client_exercises',{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newExercise)
        })
        .then(r=>r.json())
        .then((newEx)=>{
         arr.push(newEx)
        })
      }
    })
    setClientExArr(arr)
  },[])
  
  
  //take the block of selected exercises
  //for each workout_exercise, look for that exercise in the client_exercises
  //if (the exercise had been previously assigned)
  //get the info for that client_exercise, push to clientExerciseArr
  //if NOT(else)
  //create a new client_exercise, push to clientExerciseArr

  //take clientExerciseArray
  //get exercise title, resistance level
  //give option to set or change resistance level


  const clientExercisesBlock = clientExArr.map((ex)=>{
    const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)
    const options = []
    function createOptions(){
      for(let i = 2.5; i < 140; i = i + 2.5){
        options.push(<option key = {i}>{i} - {i + 5}</option>)
      }
    }

  createOptions()

  function handleSelectWeight(e){
    setExWeight(e.target.value)
    fetch(`client_exercises/${ex.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        weight: exWeight        
      })
    })
      .then(r=>r.json())
      .then(data=>{
          
          const index = clientExArr.findIndex((x)=>x.id===ex.id)
          console.log(index)
          clientExArr.splice(index, 1, data)
          const newArr = clientExArr
          console.log(clientExArr)
          setClientExArr(newArr)
        })

      }

    const weightSelect = (
      <select onChange={handleSelectWeight}>
        {options}
      </select>
    )

    const weight = () => {
     return ex.weight
    }

    return(
      <div>
        <p key={ex.id}>{exercise.name}, {weight()}</p>
      {weightSelect}
      </div>
    )
  })

  return(
    <div>
      {block.count}, {block.sets}, {block.note}
      {clientExercisesBlock}
    </div>
  )
}

export default BlockConfirm