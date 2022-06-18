import { NavLink } from 'react-router-dom';

function NavBar(){
  return(
    <div className="navbar">
      <NavLink to = "/trainerhome" className="navlink">Trainer Home</NavLink>
      <NavLink to = "/about" className="navlink">About HutchFit PRO</NavLink>
      <NavLink to = "/newworkout" className="navlink">Create a New Workout</NavLink>
    </div>
  )
}

export default NavBar;
