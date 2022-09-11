import { useState, useEffect } from 'react';
import Block from './Block';


function Workout({workout}){
  const [blocks, setBlocks] = useState([])
  
  useEffect(()=>{
    
    if(workout){
      const blocksArr = workout.blocks.map((b)=>{
        const blockNumber = workout.blocks.findIndex((bl)=>bl.id===b.id) + 1
        return(
          <div>
            <h3>Circuit # {blockNumber}</h3>
            <Block block={b}/>
            <h4>Rest 1 Minute</h4>
          </div>
        )
      });
      setBlocks(blocksArr)
    }
  }, [workout])

  return(
    <div className="workout-card">
      <h2>{workout ? workout.title : null}</h2>
      <div id="warmup">
        WarmUp/Movement Prep
      </div>
      <div>
        {blocks}
      </div>
    </div>
  )
}

export default Workout