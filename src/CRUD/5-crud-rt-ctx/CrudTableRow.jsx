import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContextRouter from "./context/CrudContext";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

const CrudTableRow = ({ dt }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContextRouter);

  let navigate = useNavigate();
  let { player, team, id, nro, tiempo, aceptoTerminos } = dt;

  const handleEdit = () => {
    setDataToEdit(dt);
    navigate("/RoutertContext/agregar");
  };

  return (
    <tr>
      <td>{player}</td>
      <td>{team}</td>
      <td>{nro}</td>
      <td>{aceptoTerminos ? "✅" : "❌"}</td>
      <td>{tiempo}</td>
      <td>
        <button className="btn-edit" onClick={handleEdit}>
          <img src={imgEdit} alt="editar" />
        </button>
        <button onClick={() => deleteData(id)}>
          <img src={imgDelete} alt="Borrar" />
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
