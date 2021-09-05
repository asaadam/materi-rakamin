import React from "react";
import { useHistory } from "react-router-dom";

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const history = useHistory();
  const [userInfo, setUserInfo] = React.useState({
    name: "guest",
    isLogged: false,
  });
  const logout = () => {
    setUserInfo({ name: "guest", isLogged: false });
  };

  const value = [userInfo, setUserInfo, logout];
  return <UserContext.Provider value={value} {...props} />;
}
