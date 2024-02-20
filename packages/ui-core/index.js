const { init, h } = require("snabbdom");
const patch = init([]);

const createUI = () => {
  let state = { count: 0 };
  let updateCallback;

  const updateState = (newState) => {
    state = { ...state, ...newState };
    updateCallback && updateCallback(state);
  };

  const template = () => {
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
    const vnode = template();
    patch(container, vnode);
    console.log("Component Mounted");

    // Handle lifecycle events, for example, log when the component is updated
    setTimeout(() => {
      console.log("Component Updated");
    }, 0);
  };

  return { mount };
};

module.exports = createUI();
