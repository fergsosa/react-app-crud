import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContextRouter from "./context/CrudContext";

const CrudTableRow = ({ dt }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContextRouter);

  let navigate = useNavigate();
  let { player, team, id } = dt;

  const handleEdit = () => {
    setDataToEdit(dt);
    navigate("/agregar");
  };

  return (
    <tr>
      <td>{player}</td>
      <td>{team}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
