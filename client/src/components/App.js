
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Login from './Login';
import Signup from './Signup';
import { useEffect, useState } from 'react';
import TrainerHome from './TrainerHome';
import NavBar from './Navbar'
import NewWorkoutForm from './NewWorkout/NewWorkoutForm';
import About from './About';
import SelectExercises from './NewWorkout/SelectExercises';

function App() {
  const [user, setUser] = useState(null);
  const [signUpFormOn, setSignUpFormOn] = useState(true)
  const [nextClientWorkoutOn, setNextClientWorkoutOn] = useState(false)
 
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[])

  let landingPage 

  if (!user){
    landingPage = (
      <div>
    <Banner/>
    <Login onLogin={setUser} user={user} nextClientWorkoutOn={nextClientWorkoutOn} setNextClientWorkoutOn={setNextClientWorkoutOn}/>
    {signUpFormOn ? <Signup setUser={setUser} setSignUpFormOn={setSignUpFormOn}/> : ""}
  </div>
    )
  } else {
    landingPage = (
      <div className="start-page">
        <Banner/>
        <NavBar/>
        <Routes>
          <Route exact path="/newworkout" element={<NewWorkoutForm user={user}/>}/>
          <Route exact path="/newworkout/selectexercises" element={<SelectExercises/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/trainerhome" element={<TrainerHome user={user} setUser={setUser}/>}/>
          <Route exact path="/" element={<TrainerHome user={user} setUser={setUser}/>}/>
        </Routes>
      </div>
    )
  }

  return (
      landingPage
    );
}

export default App;
