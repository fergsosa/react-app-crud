import React, { useContext } from "react";
import CrudContextRdRt from "./context/CrudContext";
import { useNavigate } from "react-router-dom";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

const CrudTableRow = ({ dt }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContextRdRt);

  let navigate = useNavigate();

  let { player, team, id } = dt;

  const handleEdit = () => {
    setDataToEdit(dt);
    navigate("/Reducers_RouterContext/agregar");
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
