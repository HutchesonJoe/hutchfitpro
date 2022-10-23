import { useEffect, useState } from 'react'

export const WarmUp = ({warmUpLength, setWarmUpLength}) =>{

  const warmup = [
    {
      name: 'Wrist Rolls', 
      instructions: 'Clasp the hands together and roll the wrists around in both directions.'
    },
    {
      name: 'Neck Rolls', 
      instructions: 'Bring one ear close to the same shoulder; gently roll to the other shoulder, bringing the ear close to the chest.'
    },
    {
      name: 'Hip Circles', 
      instructions: 'Draw big circles in front of the hip with the knee; keep the pelvis steady/level; alternate knees to challenge balance and activate the core. Do a few circles from in to out, then change directions.'
    },
    {
      name: 'Jumping Jacks', 
      instructions: 'Come on. You know how to do these.'
    }
  ]

  useEffect(()=>{
    setWarmUpLength(warmup.length)
  },[])

  const [index, setIndex ] = useState(0)
  const [exercise, setExercise] = useState(warmup[index])

  // if(index === warmup.length){
  //   setWarmUpOn(false)
  // }

  const handleClick = () => { 
    let newIndex = index + 1
    setIndex(newIndex)
    setExercise(warmup[newIndex])
    setWarmUpLength(warmUpLength - 1)
  }

  return (
  <>
    <h1>Get warmed up!</h1>
    <div>
      <h2>{exercise.name}</h2>
      <h3>{exercise.instructions}</h3>
      <button onClick={handleClick} type='button'>Next</button>
    </div>
  </>
  )
}