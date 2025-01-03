// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Loader, Message } from "../components";
// import {
// createAction,
// deleteAction,
// noAction,
// readAllAction,
// updateAction,
// } from "./actions/crudActions";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import { useContext } from "react";
import CrudContextReduxRtCtx from "./context/CrudContext";

const CrudApiReduxRtCtx = () => {
  const { db, loading, error } = useContext(CrudContextReduxRtCtx);

  return (
    // <HashRouter>
    <>
      <h2 className="title-component">
        CrudApi <br /> "REDUX-ROUTER/CONTEXT"
      </h2>
      <div className="container">
        <nav className="nav-rutas">
          <NavLink to="/AppRedux_RouterContext">Jugadores</NavLink>
          <NavLink to="/AppRedux_RouterContext/agregar">Agregar</NavLink>
        </nav>
        <Routes>
          <Route
            path=""
            element={
              <>
                {loading && <Loader />}
                {error && (
                  <Message
                    msg={`Error ${error.status}: ${error.statusText}`}
                    bgColor="#dc3545"
                  />
                )}
                {db && <CrudTable />}
              </>
            }
          />
          <Route path="agregar" element={<CrudForm />} />
          <Route path="editar/:id" element={<CrudForm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </>
    //  </HashRouter>
  );
};

export default CrudApiReduxRtCtx;
