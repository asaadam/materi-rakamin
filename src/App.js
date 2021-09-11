import logo from "./logo.svg";
import "./App.css";
import { axiosInstace } from "./shared/AxiosInstance";
import { useEffect } from "react/cjs/react.development";
import React from "react";
import { Route, Switch, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import TableGif from "./Component/Table";
import TableContainer from "./Component/TableContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={TableContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
