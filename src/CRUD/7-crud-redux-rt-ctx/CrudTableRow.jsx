import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContextReduxRtCtx from "./context/CrudContext";

const CrudTableRow = ({ dt }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContextReduxRtCtx);

  let { player, team, id } = dt;

  let navitate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(dt);
    navitate("/agregar");
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
