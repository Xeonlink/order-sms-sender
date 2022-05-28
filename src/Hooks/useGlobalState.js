import React, { useState, createContext, useContext, useEffect } from "react";

const GlobalState = createContext({});

export function GlobalState_Provider(props) {
  const { value, ...otherProps } = props;
  const [state, setState] = useState({});

  return <GlobalState.Provider value={[state, setState]} {...otherProps} />;
}

export default function useGlobalState(stateName, defaultValue) {
  const [rootState, setRootState] = useContext(GlobalState);

  const targetState = rootState[stateName];

  const setTargetState = (newTargetState) => {
    setRootState({ ...rootState, [stateName]: newTargetState });
  };

  useEffect(() => {
    if (targetState === undefined) {
      setRootState({ ...rootState, [stateName]: defaultValue });
    }
  });

  return [targetState || defaultValue, setTargetState];
}
