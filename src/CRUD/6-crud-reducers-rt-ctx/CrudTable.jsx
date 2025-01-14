import { useContext } from "react";
import CrudContextRdRt from "./context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db: data } = useContext(CrudContextRdRt);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table className="crud-table">
        <thead>
          <tr>
            <th>Jugardor</th>
            <th>Equipo</th>
            <th>
              Número <br /> de remera
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
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
