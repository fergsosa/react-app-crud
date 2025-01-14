import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContextReduxRtCtx from "./context/CrudContext";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

const CrudTableRow = ({ dt }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContextReduxRtCtx);

  let { player, team, id } = dt;

  let navitate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(dt);
    navitate("/Redux_RouterContext/agregar");
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
