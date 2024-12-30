import React from "react";
import { CrudProviderRouter } from "./context/CrudContext";
import CrudApi_RouterContext from "./CrudApi";

const App_RoutertContext = () => {
  return (
    <CrudProviderRouter>
      <CrudApi_RouterContext />
    </CrudProviderRouter>
  );
};
export default App_RoutertContext;
