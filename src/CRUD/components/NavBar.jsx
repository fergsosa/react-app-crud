import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Crud-app</NavLink>
      <NavLink to="/crudApi">Crud-Api</NavLink>
      <NavLink to="/CrudApiRouter">CrudApiRouter</NavLink>
      <NavLink to="/AppContext">AppContext</NavLink>
      <NavLink to="/CrudApiReducer">CrudApiReducer</NavLink>
      <NavLink to="/AppRedux">AppRedux</NavLink>
      <NavLink to="/App_RoutertContext">App_RoutertContext</NavLink>
      <NavLink to="/AppReducers_RouterContext">
        AppReducers_RouterContext
      </NavLink>
      <NavLink to="/AppRedux_RouterContext">AppRedux_RouterContext</NavLink>
    </nav>
  );
}

export default NavBar;
