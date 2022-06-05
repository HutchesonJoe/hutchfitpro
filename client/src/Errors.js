function Errors({errors}){
  
  let errorList

  if(errors){
    errorList = errors.map( err => <li key={err}>{err}</li>)
  } else {
    errorList = ""
  }
  return(
    <div className="errors">
      <ul>{errorList}</ul>
    </div>
    
  )
}

export default Errors