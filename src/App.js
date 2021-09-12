import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import UploadPage from "./Pages/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/upload' component={UploadPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
