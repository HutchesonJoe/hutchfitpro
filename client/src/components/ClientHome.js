import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Logout from "./Logout"

function ClientHome(){

  const [user, setUser] = useContext(UserContext)
  
  return(
    <div>
      <div>
        <p id="client-welcome">Hello, {user.name}!</p>
        <p>Here, you should be able to:</p>
        <ul>
          <li>View upcoming workout.</li>
          <li>Quickly see where your weight range is for each exercise.</li>
          <li>Log a workout: record resistance level; take a note.</li>
          <li>Request a new workout?</li>
          <li>* Create your own workout.</li>
        </ul>
      </div>
      <Logout/>
    </div>
  )
}

export default ClientHome