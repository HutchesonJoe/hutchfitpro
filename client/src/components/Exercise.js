function Exercise({exercise}){
  return(
    <div>
      <h3>{exercise.name}</h3>
      <p>{exercise.instructions}</p>
    </div>
  )
}

export default Exercise