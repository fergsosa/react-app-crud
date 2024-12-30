import React from "react";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

const CrudTableRow = ({ dt, setDataToEdit, deleteData }) => {
  let { player, team, id } = dt;
  return (
    <tr>
      <td>{player}</td>
      <td>{team}</td>
      <td>
        <button onClick={() => setDataToEdit(dt)}>
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
