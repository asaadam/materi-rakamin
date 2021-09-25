import "./App.css";
import UserProvider from "./context/UserContext";
import Router from "./router";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
