import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Loader, Message } from "../components";
// import CrudContext from "../context/CrudContext";
import CrudContext from "./context/CrudContext";
import { useContext } from "react";

const CrudApiContext = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <>
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
    </>
  );
};

export default CrudApiContext;
