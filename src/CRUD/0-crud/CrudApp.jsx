import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const inicialDb = [
  { id: 0, player: "Messi", team: "Barcelona" },
  { id: 1, player: "Di María", team: "Real Madrid" },
  { id: 3, player: "Ronaldo", team: "Real Madrid" },
  { id: 4, player: "Maradona", team: "Napoli" },
  { id: 5, player: "Di Stéfano", team: "Real Madrid" },
];

export const CrudApp = () => {
  const [db, setDb] = useState(inicialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDetele = window.confirm(
      `¿Estas seguro de eliminar el registro con el id "${id}?"`
    );

    if (isDetele) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else return;
  };

  return (
    <>
      <h2 className="title-component">CrudApp</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};

// export default CrudApp;
