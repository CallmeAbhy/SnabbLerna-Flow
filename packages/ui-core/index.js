// packages/ui-core/index.js
const { init, h } = require("snabbdom");
const patch = init([]);

let state = { count: 0 };
let updateCallback;

const updateState = (newState) => {
  state = { ...state, ...newState };
  updateCallback && updateCallback();
};

const template = (state, updateState) => {
  return h("div", [
    h("h1", state.count),
    h(
      "button",
      { on: { click: () => updateState({ count: state.count + 1 }) } },
      "Add"
    ),
  ]);
};

const mount = (container, cb) => {
  updateCallback = cb;
  patch(container, template(state, updateState));
  console.log("Component Mounted");
};

module.exports = { mount };
