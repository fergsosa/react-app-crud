import store from "./store.js";

const d = document;
const $counterValue = d.getElementById("counter-value");
const $incrementBtn = d.getElementById("increment-btn");
const $decrementBtn = d.getElementById("decrement-btn");
const $resetBtn = d.getElementById("reset-btn");

function render() {
  const state = store.getState();
  $counterValue.textContent = state.counter;
}

store.subscribe(render);

d.addEventListener("DOMContentLoaded", render);

$incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT", payload: 1 });
});
$decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT", payload: 1 });
});
$resetBtn.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});
