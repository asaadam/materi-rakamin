import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function UserPage() {
  const history = useHistory();
  let { id } = useParams();
  const [_, setUser, logout] = useUser();

  return (
    <div className='App'>
      <h1>User Page </h1>
      {id}
      <button onClick={() => history.push("/")}> Ke home Page </button>
      <Link to='/user/test'>
        <button>Test</button>
      </Link>
      <button onClick={logout}> Logout </button>
      <Switch>
        <Route path='/user/test' exact>
          <div>Test inside user</div>
        </Route>
      </Switch>
    </div>
  );
}
