import { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
        setError(e.code.slice(5));
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
