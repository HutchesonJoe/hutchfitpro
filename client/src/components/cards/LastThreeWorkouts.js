import { ThisClientContext } from "../context/ThisClientContext"
import { useContext } from "react"

function LastThreeWorkouts(){
  const [thisClient] = useContext(ThisClientContext)
  
  const lastThree = thisClient.workouts.slice(-4, -1).map((w)=><li key={w.id}>{w.title}</li>)
  return(
    <div>
      <ul>
        {lastThree}
      </ul>
    </div>
  )
}

export default LastThreeWorkouts