import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Loader, Message } from "../components";
// import CrudContext from "../context/CrudContext";
import CrudContext from "./context/CrudContext";
import { useContext, useEffect, useState } from "react";

const CrudApiContext = () => {
  const { db, loading, error } = useContext(CrudContext);

  const [fadeClass, setFadeClass] = useState("");
  useEffect(() => setFadeClass("fade-in"), []);

  return (
    <div className={fadeClass}>
      <h2 className="title-component">
        CrudApi <br /> CONTEXT
      </h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApiContext;
