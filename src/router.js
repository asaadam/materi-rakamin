import { Layout } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import PrivateRoute from "./component/PrivateRoute";
import { useUser } from "./hooks/useUser";
import { HomePage, LoginPage, UserPage } from "./pages";

export default function Router() {
  const [user] = useUser();
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Switch>
          <PrivateRoute
            allowed={user.name !== "guest"}
            path='/user/'
            redirect='/login'>
            <UserPage />
          </PrivateRoute>
          <PrivateRoute
            allowed={user.name !== "guest"}
            path='/user/:id'
            redirect='/login'>
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
      </Layout>
    </BrowserRouter>
  );
}
