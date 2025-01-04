import { HashRouter, Route, Routes } from "react-router-dom";
import { CrudApi, CrudApp_LocalStore, CrudApp } from "./0-crud";
import CrudApiRouter from "./1-crud-router/CrudApi";
import AppContext from "./2-crud-context/AppContext";
import CrudApiReducer from "./3-crud-reducers/CrudApi";
import AppRedux from "./4-crud-redux/appRedux";
import App_RoutertContext from "./5-crud-rt-ctx/AppRtCtx";
import AppReducers_RouterContext from "./6-crud-reducers-rt-ctx/AppReducersTtCtx";
import AppRedux_RouterContext from "./7-crud-redux-rt-ctx/AppRedux";
import NavBar from "./components/NavBar";

const myTitle = {
  textAlign: "center",
  webkitTextStroke: ".5px #444",
};

function Crud() {
  return (
    <>
      <h1 style={myTitle}>CRUD</h1>
      <hr />

      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CrudApp />} />
          <Route path="/localStore" element={<CrudApp_LocalStore />} />
          <Route path="/crudApi" element={<CrudApi />} />
          <Route path="/CrudApiRouter/*" element={<CrudApiRouter />} />
          <Route path="/AppContext" element={<AppContext />} />
          <Route path="/CrudApiReducer" element={<CrudApiReducer />} />
          <Route path="/AppRedux" element={<AppRedux />} />
          <Route
            path="/App_RoutertContext/*"
            element={<App_RoutertContext />}
          />
          <Route
            path="/AppReducers_RouterContext/*"
            element={<AppReducers_RouterContext />}
          />
          <Route
            path="/AppRedux_RouterContext/*"
            element={<AppRedux_RouterContext />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default Crud;
