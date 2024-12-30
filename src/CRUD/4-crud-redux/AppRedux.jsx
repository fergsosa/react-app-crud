import React from "react";
import { Provider } from "react-redux";
import CrudApiRedux from "./CrudApi";
import store from "./store";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <CrudApiRedux />
    </Provider>
  );
};
export default AppRedux;
