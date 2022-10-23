
// import './App.css';
import Banner from './Banner';
import Login from './Login';
import Signup from './signup/Signup';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from './context/UserContext';
import TrainerHome from './TrainerHome';
import {ClientHome }from './client_home/ClientHome';
import { ThisClientProvider } from './context/ThisClientContext';
import {CurrentWorkoutProvider} from './context/CurrentWorkoutContext'



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
  },[setUser])

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
        {isTrainer ? <ThisClientProvider><TrainerHome/></ThisClientProvider> : <CurrentWorkoutProvider><ClientHome/></CurrentWorkoutProvider>}
       
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
