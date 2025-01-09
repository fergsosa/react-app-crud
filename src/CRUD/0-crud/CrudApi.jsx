import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { Loader, Message } from "../components";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [fadeClass, setFadeClass] = useState("");
  useEffect(() => setFadeClass("fade-in"), []);

  let api = helpHttp();
  let url = "http://localhost:3000/players";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  //* 🔻Componente de LOGICA DEL CRUD
  //* 🔻crear
  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    //* 🔻🔻
    api.post(url, options).then((res) => {
      if (!res.err) {
        // console.log({ db, res, xcombined: [...db, res] });

        setDb([...db, res]);
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
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        // console.log({ endpoint, db, res, xnewData: newData });
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
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else setError(res);
      });
    } else return;
  };

  return (
    <div className={fadeClass}>
      <h2 className="title-component">CrudApi</h2>
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
    </div>
  );
};
