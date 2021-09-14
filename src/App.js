import { useState } from "react";
import "./App.css";

//conditional rendering with pattern matching
function renderError(error) {
  switch (error) {
    case "loading":
      return <h1>Lagi loading tong</h1>;
    case "empty":
      return (
        <h1 style={{ color: "red" }}>
          Eh lagi Error empty, tolong diisi dulu tong
        </h1>
      );
    case "space":
      return <h1 style={{ color: "pink" }}>ga bisa pake spasi tong</h1>;
    default:
      return null;
  }
}

function App() {
  const [listTodo, setListTodo] = useState([]);

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (userInput) {
      setError(null);
      setListTodo((prev) => [...prev, userInput]);
      setUserInput("");
      return;
    }
    setError("empty");
  }

  function handleChange(event) {
    if (event.target.value.includes(" ")) {
      return setError("space");
    }
    setError(null);
    setUserInput(event.target.value);
  }

  function handleDelete(key) {
    setListTodo((prev) => prev.filter((val) => val !== key));
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='todoInput'>Todo:</label>
          <input
            id='todoInput'
            type='text'
            onChange={handleChange}
            value={userInput}
          />
        </div>
        {renderError(error)}
        <button type='submit'>Submit</button>
      </form>
      {listTodo.length > 0 ? (
        listTodo.map((val, index) => (
          <ul key={`${val} ${index}`}>
            <li>{val}</li>
            <button onClick={() => handleDelete(val)}>Delete</button>
          </ul>
        ))
      ) : (
        <h1>Belom ada todo</h1>
      )}
    </div>
  );
}

export default App;
