function Exercise({exercise}){
  return(
   
    <div>
      <p>3-4 sets of 10-12 reps</p>
      <h4>{exercise.name}</h4>
      <p>&emsp;{exercise.instructions}</p>
    </div>
  )
}

export default Exercise