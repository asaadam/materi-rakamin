import { useState } from "react";
import "./App.css";

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
    setError("Eh Error Jangan Asal Submit, Diisi Dulu!");
  }

  function handleChange(event) {
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
        {error && <p style={{ color: "red" }}>Error {error}</p>}
        <button type='submit'>Submit</button>
      </form>
      {listTodo.map((val, index) => (
        <ul key={`${val} ${index}`}>
          <li>{val}</li>
          <button onClick={() => handleDelete(val)}>Delete</button>
        </ul>
      ))}
    </div>
  );
}

export default App;
