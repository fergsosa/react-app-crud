import React from "react";
import imgEdit from "../img/edit.svg";
import imgDelete from "../img/delete.svg";

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
