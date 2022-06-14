function Exercise({exercise}){
  return(
   
    <div>
      <h4>{exercise.name}</h4>
      <p>{exercise.instructions}</p>
    </div>
  )
}

export default Exercise