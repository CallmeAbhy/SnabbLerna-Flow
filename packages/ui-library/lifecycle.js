// Inside ui-library/package.js or equivalent
let isMounted = false;

// Life Cycle Events method
export function useEffect(effectFunction) {
  if (!isMounted) {
    // Execute the effect function only on mount
    effectFunction();
    isMounted = true;
  }
}
