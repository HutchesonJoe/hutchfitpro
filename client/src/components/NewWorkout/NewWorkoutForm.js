import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
// import { ExerciseRepContext } from '../context/ExerciseRepContext';
import { UserContext } from '../context/UserContext';
import Workout from '../workout/Workout';
import { ThisClientContext } from '../context/ThisClientContext';
import Errors from '../Errors'
import CreateBlock from './CreateBlock';


function NewWorkoutForm({client}){
  const[thisClient] = useContext(ThisClientContext)
  const[title, setTitle] = useState("")
  const[titleInputOn, setTitleInputOn] = useState(true)
  const[blockOn, setBlockOn] = useState(false)
  const[submitted, setSubmitted] = useState(false)
  const[errors, setErrors] = useState([])
  const[selectExercisesOn, setSelectExercisesOn] = useState(false) 
  // const[newWorkoutExercises, setNewWorkoutExercises] = useState([])
  const[previewOn, setPreviewOn] = useState(false)
  const[workout, setWorkout] = useState()
  const[blockArray, setBlockArray] = useState([])
  function handleSubmitTitle(e){
    e.preventDefault()
    const workout = {
      title, 
      client_id: thisClient.id
    }

    fetch("/workouts",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(workout)
    })
      .then(r=>r.json())
      .then(data=>setWorkout(data))
    setTitleInputOn(!titleInputOn)
    setSelectExercisesOn(!selectExercisesOn)
    setBlockOn(true)
    
  }
  
  const navigate = useNavigate()

  // function handleSubmitExercises(e){
  //   e.preventDefault()
  //   setSubmitted(!submitted)
  //   setSelectExercisesOn(!selectExercisesOn)

  //   let exerciseIds = newWorkoutExercises.map((ex)=>{
  //     return({exercise_id: parseInt(ex)})
  //   })
  //   console.log(exerciseIds)
  //   fetch("/workouts",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //     workout: {
  //       title,
  //       exercise_ids : exerciseIds,
  //       client_id : client.id
  //     }
  //   })
  //   })
  //     .then((r) => {
  //       if(r.ok){
  //         r.json().then((data)=>{
  //           console.log(data)
  //           setTitle(data.title)
            
  //         })
  //       } else {
  //         r.json().then((err) => setErrors(err.errors))
  //       }
  //     })
    
  // }

  //Is this the right way? probably not a useNavigate. Probably switch to conditional.
  function handleNavigate(){
    navigate(-1)
  }

  return(
    <div>
      <form onSubmit={handleSubmitTitle}>
        <div>
            {titleInputOn ? <input  id="workout-title-input" placeholder="Title Workout, i.e. 'Upper Body/Core'" onChange={(e)=>setTitle(e.target.value)}></input> : ""}
        </div>
        <div>
          {blockOn ? 
            <div>
              <p className="workout-title">{title}</p>
            </div>
            : ""}
        </div>
        {titleInputOn ? <button type="submit">Next</button> : null}
        </form>
        {blockOn ? <CreateBlock  workout={workout} setWorkout={setWorkout} blockArray={blockArray} setBlockArray={setBlockArray}/> : null}
        {/* newWorkoutExercises={newWorkoutExercises} setNewWorkoutExercises={setNewWorkoutExercises} */}
        {/* {submitted ? "Your new workout has been submitted and can now be selected for your client's next workout." : ""} */}
      
      {previewOn ? <Workout workout={workout}/> : null}
      <Errors errors={errors}/>
    </div>
  )
}

export default NewWorkoutForm