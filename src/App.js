import * as React from "react";
import CountProvider from "./context/countContext";
import Counter from "./component/counter";
import CountDisplay from "./component/counterDisplay";
function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export default App;
