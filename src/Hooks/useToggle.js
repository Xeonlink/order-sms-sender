import { useState } from "react";

export default function useToggle(defaultValue, toggleValue) {
  const [state, setState] = useState(defaultValue);

  const toggleState = (forceValue) => {
    if (forceValue !== undefined) {
      return setState(forceValue);
    }
    setState((state) => (state === defaultValue ? toggleValue : defaultValue));
  };

  return [state, toggleState];
}
