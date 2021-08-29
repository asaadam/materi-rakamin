import React from "react";
import Greeting from "./greeting";

export default function MateriHooks() {
  const [count, setCounter] = React.useState(0);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>{count}</button>
      <Greeting />
    </>
  );
}
