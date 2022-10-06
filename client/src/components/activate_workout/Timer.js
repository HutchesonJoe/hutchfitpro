import { Component } from "react";

class Timer extends Component{
  state = {
    count: 30
  }

  timerStyle = {
    color: "blue",
    backgroundColor: "yellow",
    padding: "10px",
    margin: "10px",
    float: "center"

  }

  render(){
    return(
      <div style={this.timerStyle}>
        <p>{this.state.count}</p>
      </div>
      
    )
  }
}

export default Timer;