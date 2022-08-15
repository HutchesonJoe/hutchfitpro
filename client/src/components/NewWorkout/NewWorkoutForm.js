import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
// import { ExerciseRepContext } from '../context/ExerciseRepContext';
import { UserContext } from '../context/UserContext';
import Errors from '../Errors'
import SelectExercises from './SelectExercises';

function NewWorkoutForm({clientExercises}){
  // const[user] = useContext(UserContext)
  console.log(clientExercises)
  const[title, setTitle] = useState("")
  const[titleInputOn, setTitleInputOn] = useState(true)
  const[submitted, setSubmitted] = useState(false)
  const[formOn, setFormOn] = useState(false)
  const[errors, setErrors] = useState([])
  const[selectExercisesOn, setSelectExercisesOn] = useState(false) 
  const[newWorkoutExercises, setNewWorkoutExercises] = useState([])

  useEffect(()=>{
    
  },[])

  function handleSubmitTitle(e){
    e.preventDefault()
    setTitleInputOn(!titleInputOn)
    setSelectExercisesOn(!selectExercisesOn)
  }
  
  const navigate = useNavigate()

  function handleSubmitExercises(e){
    e.preventDefault()
    setSubmitted(!submitted)
    setSelectExercisesOn(!selectExercisesOn)

    let exerciseIds = newWorkoutExercises.map((ex)=>{
      return({exercise_id: parseInt(ex)})
    })
   
    fetch("/workouts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      workout: {
        title,
        exercise_ids : exerciseIds
      }
    })
    })
      .then((r) => {
        if(r.ok){
          r.json().then((data)=>{
            console.log(data)
            setTitle(data.title)
            
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    
  }

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
          {selectExercisesOn ? 
            <div>
              <p className="workout-title">{title}</p>
              <SelectExercises setFormOn={setFormOn} formOn={formOn} clientExercises={clientExercises} newWorkoutExercises={newWorkoutExercises} setNewWorkoutExercises={setNewWorkoutExercises}/>
            </div>
            : ""}
        </div>
       
      
        {titleInputOn ? <button type="submit">Next</button> : <button onClick={submitted ? handleNavigate : handleSubmitExercises}>{submitted ? "Back to Clients": "Submit Workout"}</button>}
        {submitted ? "Your new workout has been submitted and can now be selected for your client's next workout." : ""}
      </form>
      <Errors errors={errors}/>
    </div>
  )
}

export default NewWorkoutForm