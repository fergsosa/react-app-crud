import React from "react";

const CrudTableRow = ({ dt, setDataToEdit, deleteData }) => {
  let { player, team, id } = dt;
  return (
    <tr>
      <td>{player}</td>
      <td>{team}</td>
      <td>
        <button onClick={() => setDataToEdit(dt)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
