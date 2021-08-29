import React from "react";

export const MyContext = React.createContext();

export default function CountProvider(props) {
  const [count, setCount] = React.useState(1);
  const value = [count, setCount];
  return <MyContext.Provider value={value} {...props} />;
}
