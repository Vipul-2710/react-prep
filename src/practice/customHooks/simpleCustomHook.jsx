import { useState } from 'react';

// Custom hook to manage a boolean state toggle
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

// Usage of the custom hook
function MyComponent() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <p>Toggle is ON</p>}
      {!isToggled && <p>Toggle is OFF</p>}
    </div>
  );
}

export default MyComponent;