
// import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
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
    <Login onLogin={setUser} user={user}/>
    {signUpFormOn ? <Signup setUser={setUser} setSignUpFormOn={setSignUpFormOn}/> : ""}
  </div>
    )
  } else if(user.trainer_id){
    landingPage=(<div>
      Client Home
    </div>)
  } else {
    landingPage = (
      <div className="start-page">
        <Banner/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<TrainerHome user={user} setUser={setUser}/>}/>
          {/* <Route path="/confirmworkout" element={<ConfirmWorkout/>}/> */}
          <Route path="/newworkout" element={<NewWorkoutForm/>}/>
          <Route path="/newworkout/selectexercises" element={<SelectExercises/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="/trainerhome" element={<TrainerHome user={user} setUser={setUser}/>}/>
        </Routes>
      </div>
    )
  }

  return (
      landingPage
    );
}

export default App;
