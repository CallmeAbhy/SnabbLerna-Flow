// Inside ui-library/package.js or equivalent
import snabbdom from "snabbdom";

const { h } = snabbdom;

// Templating method
export function createTemplate(state, props) {
  // Your template logic here, returning a Virtual Node
  return h("div", {}, [
    h("h1", {}, `Count: ${state.count}`),
    h("button", { on: { click: props.onClick } }, "Increment"),
  ]);
}
