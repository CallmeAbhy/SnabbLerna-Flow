// packages/ui-example/index.js
const { mount } = require("ui-core");

const container = document.getElementById("app");

mount(container, () => {
  console.log("State Changed:", { count: state.count });
});
