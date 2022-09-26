import { useState, useEffect } from 'react';
import Block from './Block';


function Workout({workout}){
  const [blocks, setBlocks] = useState([])
 
  useEffect(()=>{
    
    if(workout){
      const blocksArr = workout.blocks.map((b)=>{
        const blockNumber = workout.blocks.findIndex((bl)=>bl.id===b.id) + 1
        
        return(
          <div className="block" key={b.id}>
    
            <Block block={b} blockNumber={blockNumber}/>
            {blocks.length===blockNumber ? null : <p className="rest">Rest 1 Minute</p>}
            
          </div>
        )
      });
      setBlocks(blocksArr)
    }
  }, [workout])

  return(
    <div>
      
      <p id="workout-title">{workout.title}</p>
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