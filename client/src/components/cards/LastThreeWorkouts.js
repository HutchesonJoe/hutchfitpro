import { ThisClientContext } from "../context/ThisClientContext"
import { useContext, useEffect, useState } from "react"

function LastThreeWorkouts(){
  // const [lastThree, setLastThree] = useState([])
  const [thisClient] = useContext(ThisClientContext)
  
    const lastThree = thisClient.workouts.slice(-3).map((w)=><li key={w.id}>{w.title}</li>)
  //   setLastThree(workoutListItems)
  // },[thisClient])
  
  return(
    <div>
      
      <ul>
        {lastThree.length!==0 ? lastThree : "No workouts yet."}
      </ul>
    </div>
  )
}

export default LastThreeWorkouts