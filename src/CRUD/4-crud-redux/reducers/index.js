//!      REDUCERS
import { combineReducers } from "redux";
import { crudReducerRedux } from "./crudReducersRedux";

//* 🔻Combina múltiples reducers en uno
const reducer = combineReducers({
  // contador: contadorReducer,
  // shopping: shoppingReducer,
  crud: crudReducerRedux,
});

export default reducer;
