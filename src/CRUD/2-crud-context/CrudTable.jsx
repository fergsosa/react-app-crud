import { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import CrudContext from "./context/CrudContext";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table className="crud-table">
        <thead>
          <tr>
            <th>Jugardor</th>
            <th>Equipo</th>
            <th>
              N° de <br />
              remera
            </th>
            <th>Vigente</th>
            <th>tiempo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((dt) => <CrudTableRow key={dt.id} dt={dt} />)
          ) : (
            <tr>
              <td colSpan="6">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
