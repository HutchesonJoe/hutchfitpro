import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/jest-dom";
import mockFetch from "../mocks/mockFetch";
import ClientCard from "./ClientCard";
// import TestRenderer from 'react-test-renderer'
import { ExerciseRepContext } from "../context/ExerciseRepContext";
import { ThisClientContext } from "../context/ThisClientContext"

console.log(userEvent)
beforeEach(()=>{
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(()=>{
  jest.restoreAllMocks()
})

const thisClient = {
  id: 1,
  first_name: "Charl",
  last_name: "Brown",
  email: "charlsemail@gmail.com",
  feet: 6,
  inches: 4,
  weight: 210,
  fitness_level: "intermediate",
  workouts_per_week: 5,
  age: 41,
  username: "Charl",
  trainer_id: 1,
  is_trainer: false,
  workouts: []

}

test("renders the client card",  ()=>{
  render (
    <ThisClientContext.Provider value={[thisClient]}>
      {/* <ExerciseRepContext.Provider value={null}> */}
        <ClientCard/>
      {/* </ExerciseRepContext.Provider> */}
    </ThisClientContext.Provider>
    
  )

  expect(screen.getByText(thisClient.first_name)).toBeInTheDocument();
  expect(screen.getByText(`Email: ${thisClient.email}`)).toBeInTheDocument();
})

test("trainer can open new client workout form", async()=>{
  render (
    <ThisClientContext.Provider value={[thisClient]}>
      <ExerciseRepContext.Provider value={null}>
        <ClientCard/>
      </ExerciseRepContext.Provider>
    </ThisClientContext.Provider>

  )
  
  
  // userEvent.click(screen.getByRole("button", {name: "Set this client's next workout"}))
  // expect( screen.findByRole("button", {name: "Close"}))
})