import Crud from "./CRUD/Crud";

const myTitle = {
  textAlign: "center",
};

function App() {
  return (
    <>
      <h1 style={myTitle}>APP</h1>
      <hr />
      <Crud />
      <hr />
    </>
  );
}

export default App;
