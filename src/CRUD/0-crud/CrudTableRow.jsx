import React from "react";
import imgEdit from "../img/edit.svg";
import imgDelete from "../img/delete.svg";

const CrudTableRow = ({ dt, setDataToEdit, deleteData }) => {
  let { player, team, id, nro, tiempo } = dt;
  return (
    <tr>
      <td>{player}</td>
      <td>{team}</td>
      <td>{nro}</td>
      <td>{tiempo}</td>
      <td>
        <button className="btn-edit" onClick={() => setDataToEdit(dt)}>
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
