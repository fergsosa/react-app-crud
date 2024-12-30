import { CrudApi, CrudApp } from "./0-crud";
import CrudApiRouter from "./1-crud-router/CrudApi";
import AppContext from "./2-crud-context/AppContext";
import CrudApiReducer from "./3-crud-reducers/CrudApi";
import AppRedux from "./4-crud-redux/appRedux";
import App_RoutertContext from "./5-crud-rt-ctx/AppRtCtx";
import AppReducers_RouterContext from "./6-crud-reducers-rt-ctx/AppReducersTtCtx";
import AppRedux_RouterContext from "./7-crud-redux-rt-ctx/AppRedux";

const myTitle = {
  textAlign: "center",
};

function Crud() {
  return (
    <>
      <h1 style={myTitle}>CRUD</h1>
      <hr />
      <CrudApp />
      <hr />
      <CrudApi />
      <hr />
      <CrudApiRouter />
      <hr />
      <AppContext />
      <hr />
      <CrudApiReducer />
      <hr />
      <AppRedux />
      <hr />
      <App_RoutertContext />
      <hr />
      <AppReducers_RouterContext />
      <hr />
      <AppRedux_RouterContext />
      <hr />
    </>
  );
}

export default Crud;
