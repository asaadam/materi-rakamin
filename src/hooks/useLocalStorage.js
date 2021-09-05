import React from "react";

export function useSetLocalStorage(key, initialValue) {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || initialValue
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
