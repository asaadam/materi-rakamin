import React from "react";
import { useHistory } from "react-router-dom";

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const history = useHistory();
  const [userInfo, setUserInfo] = React.useState({
    name: "guest",
    isLogged: false,
  });
  function logout() {
    setUserInfo({ name: "guest", isLogged: false });
    history.replace("/");
  }

  const value = [userInfo, setUserInfo, logout];
  return <UserContext.Provider value={value} {...props} />;
}
