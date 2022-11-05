import styled, { css } from 'styled-components'

const WorkoutTitle = styled.div`
  color: white;
  background-color: #0066ff;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  font-weight: bold;
`

const BeginWorkoutButton = styled.button`
    color: white;
    background-color: #ff6600;
    background-image: linear-gradient(orange, red)
    font-size: xxlarge;
    border-color: white;
    font-weight: bolder;
    height: 50px;
    width: 150px;
    border-radius: 25px;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
`

const ExerciseName = styled.div`
  color: #0066ff;
  font-size: x-large;
  font-weight: bold;
`

const BlockNumber = styled.p`
  color: #0066ff;
  font-weight: bold;
  font-size: x-large;
  margin: 0px;
`

const Instructions = styled.p`
  font-size: large;
  color: black;
  
`
const RepsAndSets = styled.p`
  color: black;
  font-weight: bold;
  font-size: large;
  margin: 0px;
`
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: blue;
`
const Console = styled.div`
background-color: white;
border-radius: 10px;
padding: 10px;
color: #0066ff;
text-align: center;
margin: 10px
`
const Timer = styled.div`
  
  
`
const SetCount = styled.div`
 
`
const ExerciseCard = styled.div`
  background-color: #e0e0eb;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
`

export {ExerciseName, WorkoutTitle, BeginWorkoutButton, Instructions, Card, ExerciseCard, BlockNumber, RepsAndSets, Timer, SetCount, Console}