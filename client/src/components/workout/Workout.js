import { useState, useEffect } from 'react';
import Block from './Block';


function Workout({workout}){
   
  let blocks

  useEffect(()=>{
    if(workout){
      blocks = workout.blocks.map((b)=>{
        const blockNumber = workout.blocks.findIndex((bl)=>bl.id===b.id) + 1
        return(
          <div className="block-holder">
            <h3>Circuit # {blockNumber}</h3>
            <Block block={b}/>
            <h4>Rest 1 Minute</h4>
          </div>
        )
      })
    }
  }, [workout])

  return(
    <div className="workout-card">
      <p>{workout ? workout.title : null}</p>
      <div>
        {blocks}
      </div>
    </div>
  )
}

export default Workout