import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">App</NavLink>
      <NavLink to="/localStore">localStore</NavLink>
      <NavLink to="/crudApi">Api</NavLink>
      <NavLink to="/ApiRouter">Api-Router</NavLink>
      <NavLink to="/AppContext">Context</NavLink>
      <NavLink to="/ApiReducer">Reducer</NavLink>
      <NavLink to="/AppRedux">Redux</NavLink>
      <NavLink to="/RoutertContext">Router-Context</NavLink>
      <NavLink to="/Reducers_RouterContext">Router-Reducers-Context</NavLink>
      <NavLink to="/Redux_RouterContext">Router-Redux-Context</NavLink>
    </nav>
  );
}

export default NavBar;
