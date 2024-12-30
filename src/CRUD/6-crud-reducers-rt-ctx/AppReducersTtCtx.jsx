import React from "react";
import { CrudProviderRdRt } from "./context/CrudContext";
// import CrudApi_RouterContext from "./CrudApi";
import CrudApiReducerRouterContext from "./CrudApi";

const AppReducers_RouterContext = () => {
  return (
    <CrudProviderRdRt>
      <CrudApiReducerRouterContext />
    </CrudProviderRdRt>
  );
};
export default AppReducers_RouterContext;
