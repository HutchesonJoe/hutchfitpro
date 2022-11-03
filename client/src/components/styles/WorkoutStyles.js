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
  display: flex;
  align-items: center;
`

const BlockNumber = styled.p`
  color: #0066ff;
  font-weight: bold;
  font-size: x-large;
`

const Instructions = styled.p`
  font-size: large;
  color: black;
  padding: 5px;
  
`
const RepsAndSets = styled.p`
  color: black;
  font-weight: bold;
  font-size: large
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

export {ExerciseName, WorkoutTitle, BeginWorkoutButton, Instructions, Card, BlockNumber, RepsAndSets}