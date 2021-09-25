import React from "react";

export function useSetLocalStorage(
  key,
  initialValue,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueLocalStorage = window.localStorage.getItem(key);
    if (valueLocalStorage) {
      try {
        return deserialize(valueLocalStorage);
      } catch (e) {
        window.localStorage.removeItem(key);
      }
    }
    return initialValue;
  });

  const deleteLocalStorage = () => {
    window.localStorage.removeItem(key);
  };

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState, deleteLocalStorage];
}
