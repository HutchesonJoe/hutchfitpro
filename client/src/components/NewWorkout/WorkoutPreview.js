import PreviewBlock from "./PreviewBlock"

function WorkoutPreview({blockArray}){
  console.log(blockArray)
  let workoutPreview = blockArray.map((block) => { 
    
    let blockNumber = blockArray.findIndex((b)=>block.id===b.id) + 1

    return(
      <div>
        <h3>Block number {blockNumber}</h3>
        <PreviewBlock key={block.id} block={block} />
      </div>
    )
  })
//"block" will get the set and duration count. When I confirm the block, I will set/confirm the weight for the client.
  return(
    <div>
      {workoutPreview}
    </div>
   
  )
}

export default WorkoutPreview