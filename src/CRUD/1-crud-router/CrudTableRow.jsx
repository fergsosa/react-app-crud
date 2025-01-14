import { useNavigate } from "react-router-dom";
import imgDelete from "../img/delete.svg";
import imgEdit from "../img/edit.svg";

const CrudTableRow = ({ dt, setDataToEdit, deleteData }) => {
  let { player, team, id, nro, tiempo, aceptoTerminos } = dt;
  let navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(dt);
    navigate("/ApiRouter/agregar");
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
