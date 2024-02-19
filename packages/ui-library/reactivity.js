// Inside ui-library/package.js or equivalent
let currentState = { count: 0 }; // Initial state

// Reactivity method
export function updateState(newState) {
  currentState = { ...currentState, ...newState };
  // Trigger view update using your templating method
  render(createTemplate(currentState));
}
