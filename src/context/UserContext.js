import React from "react";
import { useHistory } from "react-router-dom";
import { useSetLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = React.createContext();

export default function UserProvider(props) {
  // const [userInfo, setUserInfo] = React.useState("guest");
  const [userInfo, setUserInfo, deleteLocalStorage] = useSetLocalStorage(
    "name",
    { name: "guest" }
  );
  const logout = () => {
    deleteLocalStorage();
    window.location.reload();

    // setUserInfo({ name: "guest" });
  };

  const value = [userInfo, setUserInfo, logout];
  return <UserContext.Provider value={value} {...props} />;
}
