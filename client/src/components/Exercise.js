function Exercise({exercise}){
  return(
    <div className="exercise">
      <h5 className="exercise-name">{exercise.name}</h5>
      <h6><em>3-4 sets of 10-12 reps</em></h6>
      <h6>&emsp;Instructions: {exercise.instructions}</h6>
    </div>
  )
}

export default Exercise