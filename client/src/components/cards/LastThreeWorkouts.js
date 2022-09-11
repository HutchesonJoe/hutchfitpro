import { ThisClientContext } from "../context/ThisClientContext"
import { useContext, useEffect, useState } from "react"

function LastThreeWorkouts(){
  const [lastThree, setLastThree] = useState([])
  const [thisClient] = useContext(ThisClientContext)
  
  useEffect(()=>{
    setLastThree(thisClient.workouts.slice(-4, -1).map((w)=><li key={w.id}>{w.title}</li>)
    )
  },[])
  
  return(
    <div>
      <p>Last Three</p>
      <ul>
        {lastThree}
      </ul>
    </div>
  )
}

export default LastThreeWorkouts