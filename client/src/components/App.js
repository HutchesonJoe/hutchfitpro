
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Login from './Login';
import Signup from './signup/Signup';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './context/UserContext';
import TrainerHome from './TrainerHome';
import NavBar from './Navbar'
import NewWorkoutForm from './NewWorkout/NewWorkoutForm';
import About from './About';
import SelectExercises from './NewWorkout/SelectExercises';
import ClientHome from './client_home/ClientHome';
import { ThisClientProvider } from './context/ThisClientContext';


function App() {
  
  const [user, setUser] = useContext(UserContext);
  const [isTrainer, setIsTrainer] = useState(false)
  const [signUpFormOn, setSignUpFormOn] = useState(true)
  const [nextClientWorkoutOn, setNextClientWorkoutOn] = useState(false)
  
  useEffect(()=>{
    fetch("/me").then((r)=>{
      setIsTrainer(false)
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    })
  },[])

  useEffect(()=>{
    if(user && user.is_trainer){
      setIsTrainer(true)
    } 
  },[user])

  let landingPage 

  if (!user){
    landingPage = (
      <div>
    
    <Login setUser={setUser} user={user} nextClientWorkoutOn={nextClientWorkoutOn} setNextClientWorkoutOn={setNextClientWorkoutOn} isTrainer={isTrainer} setIsTrainer={setIsTrainer}/>
    {signUpFormOn ? <Signup setUser={setUser} setSignUpFormOn={setSignUpFormOn}/> : ""}
  </div>
    )
  } else {
    landingPage = (
      <div className="start-page">
        {/* <NavBar/> */}
        {isTrainer ? <ThisClientProvider><TrainerHome/></ThisClientProvider> : <ClientHome/>}
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
    <div>
      <Banner/>
      {landingPage}
    </div>
    
    );
}

export default App;
