//* 🔻CDN de redux
import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

//* 🔻Estado Incial y Global de la App
const inicialState = { counter: 0 };

//* 🔻Definimos las acciones de la App
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//* 🔻Reducer: una función pura que gestiona los cambios en el estado en función de las acciones
//! function funcionReductora(estado = valorInincial, acciones) {}

function counterReducer(state = inicialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };

    default:
      return state;
  }
}

//* 🔻Creamos el store
const store = Redux.createStore(counterReducer);

export default store;
