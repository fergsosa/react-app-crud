import { useContext } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { Loader, Message } from "../components";
import Error404 from "../pages/Error404";
import CrudContextRouter from "./context/CrudContext";

const CrudApi_RouterContext = () => {
  const { db, loading, error } = useContext(CrudContextRouter);
  // console.log(db);

  return (
    <HashRouter>
      <h2 className="title-component">
        CrudApi <br /> "ROUTER/CONTEXT"
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
          <Route path="/editar/:id" element={<CrudForm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default CrudApi_RouterContext;
