// import { useContext, useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import CrudContextRdRt from "./context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Loader, Message } from "../components";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";

const CrudApiReducerRouterContext = () => {
  const { db, loading, error } = useContext(CrudContextRdRt);

  return (
    <HashRouter>
      <h2 className="title-component">
        CrudApi <br /> "REDUCERS-ROUTER/CONTEXT"
      </h2>
      <div className="container">
        <nav className="nav-rutas">
          <NavLink to="/">Jugadores</NavLink>
          <NavLink to="/agregar">Agregar</NavLink>
        </nav>
        <Routes>
          <Route
            path="/"
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
          <Route path="/agregar" element={<CrudForm />} />
          <Route path="/edita/:id" element={<CrudForm />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default CrudApiReducerRouterContext;
