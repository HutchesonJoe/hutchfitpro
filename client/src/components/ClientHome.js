import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Logout from "./Logout"

function ClientHome(){

  const [user, setUser] = useContext(UserContext)
  console.log(user.workouts)
  return(
    <div>
      <div>
        <p id="client-welcome">Hello, {user.name}!</p>
      </div>
      <Logout/>
    </div>
  )
}

export default ClientHome