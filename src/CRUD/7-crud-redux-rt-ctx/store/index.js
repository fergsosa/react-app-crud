//!      STORE
import { createStore } from "redux";
import reducer from "../reducers";

//* 🔻Almacena todos los reducer
const store = createStore(reducer);

// store.subscribe(() => console.log(store));

export default store;
