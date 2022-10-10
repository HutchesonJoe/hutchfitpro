import { useState, useEffect } from 'react';
import Block from './Block';


function Workout({workout}){
  const [blocks, setBlocks] = useState([])

  useEffect(()=>{
    
    if(workout){
      
      const blocksArr = workout.blocks.map((b)=>{
        
        const blockNumber = workout.blocks.findIndex((bl)=>bl.id===b.id) + 1

        return(
          <div key={b.id}>
    
            <Block block={b} blockNumber={blockNumber}/>
            {workout.blocks.length > blockNumber ? <p className="rest">Rest 1 Minute</p> : null}
            
          </div>
        )
      });
      setBlocks(blocksArr)
    }
  }, [workout])

  return(
    <div>
      
      <div id="workout-title">{workout.title}</div>
      <br/>
      <p id="warmup">
        WarmUp/Movement Prep
      </p>
      
        {blocks}
      
      <div id="stretch">
        Stretch
      </div>
    </div>
  )
}

export default Workout