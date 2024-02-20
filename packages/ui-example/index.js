const { mount } = require("ui-core");

const container = document.getElementById("app");

mount(container, (state) => {
  console.log("State Changed:", state);
});
