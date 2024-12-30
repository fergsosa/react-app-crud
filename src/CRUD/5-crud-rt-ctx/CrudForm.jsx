import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrudContextRouter from "./context/CrudContext";

const initialForm = {
  player: "",
  team: "",
  id: null,
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContextRouter);

  const [form, setForm] = useState(initialForm);
  let navigate = useNavigate();

  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log({ [e.target.name]: e.target.value });
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
    navigate("/");
  };

  return (
    <div>
      <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>
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
        <input type="submit" value="enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
