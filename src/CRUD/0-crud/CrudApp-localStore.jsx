import React, { useEffect, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const inicialDb = [
  {
    id: 0,
    player: "Messi",
    team: "Barcelona",
    nro: "10",
    tiempo: "1 mes",
    aceptoTerminos: true,
  },
  {
    id: 1,
    player: "Di María",
    team: "Real Madrid",
    nro: "22",
    tiempo: "1 mes",
    aceptoTerminos: true,
  },
  {
    id: 3,
    player: "Ronaldo",
    team: "Real Madrid",
    nro: "7",
    tiempo: "1 mes",
    aceptoTerminos: true,
  },
  {
    id: 4,
    player: "Maradona",
    team: "Napoli",
    nro: "10",
    tiempo: "1 mes",
    aceptoTerminos: false,
  },
  {
    id: 5,
    player: "Di Stéfano",
    team: "Real Madrid",
    nro: "9",
    tiempo: "1 mes",
    aceptoTerminos: false,
  },
];

export const CrudApp_LocalStore = () => {
  const [db, setDb] = useState(inicialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    setFadeClass("fade-in");
    if (storedData) setDb(JSON.parse(storedData));
  }, []);

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);
    localStorage.setItem("myData", JSON.stringify([...db, data]));
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    localStorage.setItem("myData", JSON.stringify(newData));
  };
  const deleteData = (id) => {
    let isDetele = window.confirm(
      `¿Estas seguro de eliminar el registro con el id "${id}?"`
    );

    if (isDetele) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
      localStorage.setItem("myData", JSON.stringify(newData));
    } else return;
  };

  return (
    <div className={fadeClass}>
      <h2 className="title-component">
        CrudApp <br /> ~localStore~
      </h2>
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
    </div>
  );
};
