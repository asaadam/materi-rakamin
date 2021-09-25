import React from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useCount must be inside of MyContext Provider");
  }
  return context;
}
