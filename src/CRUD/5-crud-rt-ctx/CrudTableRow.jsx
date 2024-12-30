import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContextRouter from "./context/CrudContext";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

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
        <button onClick={handleEdit}>
          <img src={imgEdit} alt="Editar" />
        </button>
        <button onClick={() => deleteData(id)}>
          <img src={imgDelete} alt="Borrar" />
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
