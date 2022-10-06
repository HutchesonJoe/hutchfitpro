import { Component, useEffect, useState, useContext } from "react";



class CurrentBlock extends Component {
  
  state = {
    id: this.props.currentBlock.id,
    count: this.props.currentBlock.count,
    sets: this.props.currentBlock.sets,
    note: this.props.currentBlock.note,
    workout_exercises: []
  }

  componentDidMount(){
    fetch(`/blocks/${this.state.id}`)
          .then(r=>r.json())
          .then(bl=>this.setState(bl))
  }

  showprops = () => console.log(this.props.exerciseRep, "<=this.props")
  showstate = () => console.log(this.state,"<--this.state")
   
    render(){
      this.showprops()
      this.showstate()
      return(
        <>
        <p>{this.state.count}, {this.state.sets} </p>
        <div>{this.state.workout_exercises.map((ex)=>{
          {console.log(ex.exercise.name)}
         return <p key={ex.exercise.id}>{ex.exercise.name}</p>
        })}
        </div>
        <p>{this.state.note}</p>
        </>
      )
    }
  }

export default CurrentBlock;