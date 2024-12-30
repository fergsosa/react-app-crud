import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { Loader, Message } from "../components";
import {
  createAction,
  deleteAction,
  noAction,
  readAllAction,
  updateAction,
} from "./actions/crudActions";

const CrudApiRedux = () => {
  //*   🔻Selecciona datos del store.
  // const state = useSelector((state) => state);
  // const { db } = state.crud;
  const db = useSelector((state) => state.crud.db);
  //*   🔻Envía accionesFn al store.
  const dispatch = useDispatch();

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:3000/players";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        const data = Array.isArray(res) ? res : [];
        //* AccionFn  🔻
        dispatch(readAllAction(data));
        if (!res.err) setError(null);
        else {
          //* AccionFn🔻
          dispatch(noAction());
          setError(res);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

  //* 🔻Componente de LOGICA DEL CRUD
  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      //* AccionFn              🔻
      if (!res.err) dispatch(createAction(res));
      else setError(res);
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      //* AccionFn             🔻
      if (!res.err) dispatch(updateAction(res));
      else setError(res);
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = { headers: { "content-type": "application/json" } };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        //* AccionFn                🔻
        if (!res.err) dispatch(deleteAction(id));
        else setError(res);
      });
    } else {
      return;
    }
  };
  return (
    <>
      <h2 className="title-component">
        CrudApi <br /> REDUX
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

export default CrudApiRedux;
