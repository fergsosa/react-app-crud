import { useContext } from "react";
import CrudContext from "./context/CrudContext";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

const CrudTableRow = ({ dt }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);

  let { player, team, id, nro, tiempo, aceptoTerminos } = dt;

  return (
    <tr>
      <td>{player}</td>
      <td>{team}</td>
      <td>{nro}</td>
      <td>{aceptoTerminos ? "✅" : "❌"}</td>
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
