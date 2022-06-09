import CreateExerciseForm from './CreateExerciseForm';
import { useEffect, useState } from 'react';

function SelectExercises({formOn, setFormOn}){
  const[exercises, setExercises] = useState([])

  function handleSelect(){
    console.log("Handle Select")
  }
  useEffect(()=>{
    fetch("./exercises").then(r=>r.json()).then((data)=>setExercises(data))
  },[])

  let workout = []
  const exerciseList = exercises.map((ex)=>{
    return (<div>
      <input type="checkbox" id={ex.id} name={ex.name} value={ex.instructions} key={ex.name} onChange={handleSelect}/>
      <label htmlFor={ex.name} key={ex.id}>{ex.name}, <em>{ex.category}</em></label>
    </div>
    )
  })
  return(
    <div>
      <div>{exerciseList}</div>
      <div>{formOn ? <CreateExerciseForm exercises={exercises} setExercises={setExercises} setFormOn={setFormOn}/> : ""}</div>
    </div>
    
  )
}

export default SelectExercises