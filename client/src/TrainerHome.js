function TrainerHome({user, setUser}){


  function handleLogOut(){
    fetch("/logout",{
      method: 'DELETE'
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return(
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default TrainerHome