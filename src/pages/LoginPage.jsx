import { useHistory } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function LoginPage() {
  const [_, setUser] = useUser();

  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();
    setUser({ name: event.target.name.value, isLogged: true });
    history.replace("/");
  }

  return (
    <div className='App'>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>Name: </label>
        <input id='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
