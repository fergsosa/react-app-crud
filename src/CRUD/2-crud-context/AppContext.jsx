import { CrudProvider } from "./context/CrudContext";
import CrudApiContext from "./CrudApi";

const AppContext = () => {
  return (
    <CrudProvider>
      <CrudApiContext />
    </CrudProvider>
  );
};
export default AppContext;
