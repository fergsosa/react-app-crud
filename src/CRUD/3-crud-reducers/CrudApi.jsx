import { useEffect, useReducer, useState } from "react";
import { crudInitialState, crudReduces } from "./reducers/crudReducers";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader, Message } from "../components";
import { TYPES } from "./actions/crudActions";

const CrudApiReducer = () => {
  // const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReduces, crudInitialState);
  const { db } = state;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:3000/players";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        // setDb(res);
        //* Si res no es un array, lo transformamos en uno vacío.
        const data = Array.isArray(res) ? res : [];
        dispatch({ type: TYPES.READ_ALL_DATA, payload: data });
        setError(null);
      } else {
        // setDb(null);
        dispatch({ type: TYPES.NO_DATA });
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  //* 🔻Componente de LOGICA DEL CRUD
  //* 🔻crear
  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    //* 🔻🔻
    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
        // setDb([...db, res]);
      } else setError(res);
    });
  };

  //* 🔻actualizar
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    //* 🔻🔻
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        // let newData = db.map((el) => (el.id === data.id ? data : el));
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
        // setDb(newData);
      } else setError(res);
    });
  };

  //* 🔻eliminar
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      //* 🔻🔻
      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          // let newData = db.filter((el) => el.id !== id);
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
          // setDb(newData);
        } else setError(res);
      });
    } else return;
  };

  return (
    <>
      <h2 className="title-component">
        CrudApi <br /> REDUCERS
      </h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );
};

export default CrudApiReducer;
