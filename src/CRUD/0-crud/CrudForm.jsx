import { useEffect, useState } from "react";

const initialForm = {
  player: "",
  team: "",
  nro: "",
  tiempo: "",
  id: null,
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
    // Condicional para el select
    if (e.target.id === "tiempo") {
      setForm({
        ...form,
        tiempo: e.target.value,
      });
    }
    console.log({ [e.target.name]: e.target.value });
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
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form className="crud-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="player"
          placeholder="Nombre jugador"
          onChange={handleChange}
          value={form.player}
        />
        <input
          type="text"
          name="team"
          placeholder="Equipo de futbol"
          onChange={handleChange}
          value={form.team}
        />
        <label htmlFor="nro">Número</label>
        <input
          id="nro"
          type="number"
          name="nro"
          placeholder="Número"
          onChange={handleChange}
          value={form.nro}
        />
        <div class="box">
          <label htmlFor="tiempo">Tiempo</label>
          <select
            id="tiempo"
            name="tiempo" // Agregamos el atributo name
            onChange={handleChange}
          >
            <option value="---">---</option>
            <option value="1 mes">1 mes</option>
            <option value="3 meses">3 meses</option>
            <option value="5 meses">5 meses</option>
          </select>
        </div>

        <input type="submit" value="enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
