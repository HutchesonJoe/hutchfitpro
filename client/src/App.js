
// import './App.css';
import Banner from './Banner';
import Login from './Login';
import Signup from './Signup';
import { useEffect, useState } from 'react';
import TrainerHome from './TrainerHome';


function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[])

  if (!user) return (
  <div>
    <Banner/>
    <Login onLogin={setUser}/>
    <Signup/>
  </div>
  )

  return (
    <div className="start-page">
      <Banner/>
      <TrainerHome user={user}/>
    </div>
  );
}

export default App;
