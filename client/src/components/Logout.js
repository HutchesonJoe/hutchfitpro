import { useContext } from "react";
import { UserContext } from "./context/UserContext"
function Logout(){
  
  const[user, setUser] = useContext(UserContext)

  function handleLogOut(){
    fetch("/logout",{
      method: 'DELETE'
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
  <div id="logout-button">
    <button onClick={handleLogOut}>Log Out</button>
  </div>
  )
}

export default Logout