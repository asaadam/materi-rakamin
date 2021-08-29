import React from "react";
import { MyContext } from "../context/countContext";

export function useCount() {
  const context = React.useContext(MyContext);
  if (!context) {
    throw new Error("useCount must be inside of MyContext Provider");
  }
  return context;
}
