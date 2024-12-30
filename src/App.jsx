import Crud from "./CRUD/Crud";
// import CarritaDeCompra from "./carrito-compra/CarritoDeCompra";

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
      {/* <CarritaDeCompra /> */}
      {/* <hr /> */}
    </>
  );
}

export default App;
