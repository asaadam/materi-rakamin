import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import { AboutPage, HomePage, LoginPage, UserPage } from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <PrivateRoute allowed={true} path='/user/'>
          <UserPage />
        </PrivateRoute>
        <PrivateRoute allowed={true} path='/user/:id'>
          <UserPage />
        </PrivateRoute>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='*'>
          <div className='App'>Not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
