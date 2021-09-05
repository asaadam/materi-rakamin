import React from "react";

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const [userInfo, setUserInfo] = React.useState({
    name: "guest",
    isLogged: false,
  });

  const value = [userInfo, setUserInfo];
  return <UserContext.Provider value={value} {...props} />;
}
