import { useEffect, useState } from "react";

const initialForm = {
  id: null,
  player: "",
  team: "",
  nro: "",
  tiempo: "",
  aceptoTerminos: false,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit]);

  // console.log(dataToEdit);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log({ [e.target.name]: e.target.value });
  };
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.player || !form.team) {
      alert("Datos Incompletos");
      return;
    }

    if (form.id === null) createData(form);
    else updateData(form);
    // console.log({ form });

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="form">
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form className="crud-form" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label>
            <input
              type="text"
              name="player"
              placeholder=" "
              onChange={handleChange}
              value={form.player}
            />
            <span>Nombre jugador</span>
          </label>
        </div>
        <div className="form-inputs">
          <label>
            <input
              type="text"
              name="team"
              placeholder=""
              onChange={handleChange}
              value={form.team}
            />
            <span>Equipo de futbol</span>
          </label>
        </div>
        <div>
          <label htmlFor="label-nro">Número de Remera</label>
          <input
            id="label-nro"
            type="number"
            name="nro"
            min="0"
            max="100"
            placeholder="0"
            onChange={handleChange}
            value={form.nro}
          />
        </div>
        <div className="select">
          {/* <label htmlFor="label-tiempo">Tiempo</label> */}
          <select
            id="label-tiempo"
            name="tiempo"
            onChange={handleChange}
            defaultValue=" "
          >
            <option value="">Tiempo</option>
            <option value="1 mes">1 mes</option>
            <option value="3 meses">3 meses</option>
            <option value="5 meses">5 meses</option>
          </select>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            name="aceptoTerminos"
            id="label-aceptoTerminos"
            checked={form.aceptoTerminos} // Para marcarlo si ya está seleccionado
            onChange={handleChecked}
          />
          <label htmlFor="label-aceptoTerminos">Juega actualmente</label>
        </div>

        <div className="btn-inputs">
          <input type="submit" value="enviar" />
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
