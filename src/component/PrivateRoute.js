import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ children, allowed, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (allowed ? children : <Redirect to='/login' />)}
    />
  );
}
