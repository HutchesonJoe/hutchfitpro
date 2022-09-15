import PreviewBlock from "./PreviewBlock"

function WorkoutPreview({blockArray}){
  
  let workoutPreview = blockArray.map((block) => { 
    
    let blockNumber = blockArray.findIndex((b)=>block.id===b.id) + 1

    return(
      <div>
        <h3>Block number {blockNumber}</h3>
        <PreviewBlock key={block.id} block={block} />
      </div>
    )
  })
  return(
    <div>
      {workoutPreview}
    </div>
   
  )
}

export default WorkoutPreview