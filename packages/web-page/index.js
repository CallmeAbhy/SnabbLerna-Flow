// Inside web-page/package.js or equivalent
import { createTemplate } from "../ui-library/template";
import { updateState } from "../ui-library/reactivity";
import { useEffect } from "../ui-library/lifecycle";
import snabbdom from "snabbdom";
const { patch } = snabbdom;

// Initial state and props
let state = { count: 0 };

// Initial render
const initialVNode = createTemplate(state, { onClick: handleClick });

// Render function
function render(vNode) {
  patch(initialVNode, vNode);
}

// Click event handler
function handleClick() {
  // Update state and trigger reactivity
  updateState({ count: state.count + 1 });
  console.log("State changed:", state);
}

// Use the useEffect to log component mount
useEffect(() => {
  console.log("Component mounted!");
});

// Render the initial VNode
render(initialVNode);
