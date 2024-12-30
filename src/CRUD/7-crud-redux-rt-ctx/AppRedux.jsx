import { Provider } from "react-redux";
// import CrudApiRedux from "./CrudApi";
import store from "./store";
import CrudApiReduxRtCtx from "./CrudApi";
import { CrudProviderReduxRtCtx } from "./context/CrudContext";

const AppRedux_RouterContext = () => {
  return (
    <Provider store={store}>
      <CrudProviderReduxRtCtx>
        <CrudApiReduxRtCtx />
      </CrudProviderReduxRtCtx>
    </Provider>
  );
};
export default AppRedux_RouterContext;
