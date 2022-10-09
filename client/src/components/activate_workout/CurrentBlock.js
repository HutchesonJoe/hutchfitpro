import { buildQueries } from "@testing-library/react";
import { useEffect, useState, useContext } from "react";

function CurrentBlock({currentBlock}){
  console.log(currentBlock)
 const [block, setBlock] = useState()
 const [blockReturn, setBlockReturn] = useState("Loading...")
 useEffect(()=>{
  
  fetch(`/blocks/${currentBlock.id}`)
    .then(r=>r.json())
    .then(bl=>setBlock(bl))
  },[currentBlock])

 useEffect(()=>{
  if(block){
    const {count, sets, note} = block
    let thisBlockReturn = (
      <div className="block">
      <p>{block.count}, {block.sets} </p>
      <div>{block.workout_exercises.map((ex)=>{
        {console.log(ex.exercise.name)}
       return <p key={ex.exercise.id}>{ex.exercise.name}</p>
      })}
      </div>
      <p>{block.note}</p>
      </div>
    )
    setBlockReturn(thisBlockReturn)
  } 
 },[block])





 return(
 blockReturn
)
}
// class CurrentBlock extends Component {
  
//   state = {
//     id: this.props.currentBlock.id,
//     count: this.props.currentBlock.count,
//     sets: this.props.currentBlock.sets,
//     note: this.props.currentBlock.note,
//     workout_exercises: []
//   }

//   componentDidMount(){
//     fetch(`/blocks/${this.state.id}`)
//           .then(r=>r.json())
//           .then(bl=>this.setState(bl))
//   }

//   showprops = () => console.log(this.props.exerciseRep, "<=this.props")
//   showstate = () => console.log(this.state,"<--this.state")
   
//     render(){
//       this.showprops()
//       this.showstate()
//       return(
//         <>
//         <p>{this.state.count}, {this.state.sets} </p>
//         <div>{this.state.workout_exercises.map((ex)=>{
//           {console.log(ex.exercise.name)}
//          return <p key={ex.exercise.id}>{ex.exercise.name}</p>
//         })}
//         </div>
//         <p>{this.state.note}</p>
//         </>
//       )
//     }
//   }

export default CurrentBlock;