import "./App.css";
import React from "react";
import { FormLogin } from "./component/form";
import Counter from "./component/counter";

function App() {
  return (
    <div className='App'>
      <FormLogin onSubmit={(val) => console.log(val)} />
      <Counter />
    </div>
  );
}

export default App;
