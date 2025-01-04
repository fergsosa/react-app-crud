import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">App</NavLink>
      <NavLink to="/localStore">localStore</NavLink>
      <NavLink to="/crudApi">Api</NavLink>
      <NavLink to="/CrudApiRouter">Api-Router</NavLink>
      <NavLink to="/AppContext">Context</NavLink>
      <NavLink to="/CrudApiReducer">Reducer</NavLink>
      <NavLink to="/AppRedux">Redux</NavLink>
      <NavLink to="/App_RoutertContext">Router-Context</NavLink>
      <NavLink to="/AppReducers_RouterContext">Router-Reducers-Context</NavLink>
      <NavLink to="/AppRedux_RouterContext">Router-Redux-Context</NavLink>
    </nav>
  );
}

export default NavBar;
