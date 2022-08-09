
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Login from './Login';
import Signup from './Signup';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './context/UserContext';
import TrainerHome from './TrainerHome';
import NavBar from './Navbar'
import NewWorkoutForm from './NewWorkout/NewWorkoutForm';
import About from './About';
import SelectExercises from './NewWorkout/SelectExercises';
import ClientHome from './ClientHome';

function App() {
  
  const [user, setUser] = useContext(UserContext);
  
  const [isTrainer, setIsTrainer] = useState(false)
  const [signUpFormOn, setSignUpFormOn] = useState(true)
  const [nextClientWorkoutOn, setNextClientWorkoutOn] = useState(false)
    
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setIsTrainer(user.is_trainer)
        });
      }
    })
  },[])

  useEffect(()=>{
    if(user && user.is_trainer){
      console.log(user)
      setIsTrainer(true)
    } 
  },[user])

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
        {/* <NavBar/> */}
        {isTrainer ? <TrainerHome/> : <ClientHome/>}
        {/* <Routes>
          <Route exact path="/newworkout" element={<NewWorkoutForm user={user}/>}/>
          <Route exact path="/newworkout/selectexercises" element={<SelectExercises/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/trainerhome" element={<TrainerHome user={user} setUser={setUser}/>}/>
          <Route exact path="/" element={<TrainerHome user={user} setUser={setUser}/>}/>
        </Routes> */}
      </div>
    )
  }

  return (
      landingPage
    );
}

export default App;
