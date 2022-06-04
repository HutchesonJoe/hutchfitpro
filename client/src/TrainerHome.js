function TrainerHome(){

  function handleLogOut(){
    console.log("logout")
    fetch("/logout",{
      method: 'DELETE'
    })
  }

  return(
    <div>Trainer Home
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default TrainerHome