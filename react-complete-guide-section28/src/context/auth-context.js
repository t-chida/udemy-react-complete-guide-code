import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const loginHandler = () => {
    setIsAuthentication(true);
  };

  return (
    <AuthContext.Provider
      value={{ login: loginHandler, isAuth: isAuthentication }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
