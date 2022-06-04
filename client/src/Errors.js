function Errors({errors}){

  let errorList

  if(errors){
    errorList = errors.map( err => err)
  } else {
    errorList = ""
  }
  return(
    <div>{errorList}</div>
  )
}

export default Errors