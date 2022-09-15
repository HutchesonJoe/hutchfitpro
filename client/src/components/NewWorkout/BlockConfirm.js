import { useState, useContext, useEffect } from "react";
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { ThisClientContext } from "../context/ThisClientContext";

function BlockConfirm({block}){
  const[thisClient] = useContext(ThisClientContext)
  const[clientExArr, setClientExArr] = useState([])
  const[exerciseRep] = useContext(ExerciseRepContext)
  const[exWeight, setExWeight] = useState("")
  console.log(clientExArr)
  useEffect(()=>{
    let arr = [] 

    block.workout_exercises.map((ex)=>{
      const exercise = thisClient.client_exercises.find((x)=>x.exercise_id===ex.exercise_id)
      console.log(exercise)
      if(exercise!==undefined){
        arr.push(exercise)
      } else {
        const newExercise = {
          client_id : thisClient.id,
          exercise_id : ex.exercise_id
        }
        
        fetch('/client_exercises',{
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newExercise)
        })
        .then(r=>r.json())
        .then((newEx)=>{
        console.log(newEx)
         arr.push(newEx)
         setClientExArr([...arr, newEx])
        })
        
      }
    })
    
  },[thisClient])
  console.log(clientExArr)
  const clientExercisesBlock = clientExArr.map((ex)=>{
    const exercise = exerciseRep.find((x)=>x.id===ex.exercise_id)
    const options = []
    function createOptions(){
      for(let i = 2.5; i < 140; i = i + 2.5){
        options.push(<option key = {i}>{i} - {i + 5}</option>)
      }
    }

  createOptions()

  function handleSubmit(e){
    e.preventDefault()
    const index = clientExArr.findIndex((x)=>x.id===ex.id)
    const filteredArr = clientExArr.filter((y)=>y.id!==ex.id)
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
          filteredArr.splice(index, 0, data);
          setClientExArr(filteredArr)
        })
      }

    const weightSelect = (
      <form onSubmit={handleSubmit}>
        <label>Select Resistance Level</label>
        <select onChange={(e)=>setExWeight(e.target.value)}>
          <option>Body Weight/0</option>
          {options}
        </select>
        <button type="submit">submit</button>
      </form>
      
    )

    const weight = () => {
     return ex.weight
    }

    return(
      <div className="exercise">
        <p key={ex.id}>{exercise.name}: {weight()} lbs</p>
      {weightSelect}
      </div>
    )
  })
 
  return(
    <div className="block">
      {block.count}, {block.sets}{block.note ? `,${block.note}` : ""}
      {clientExercisesBlock}
    </div>
  )
}

export default BlockConfirm