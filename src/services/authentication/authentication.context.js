import { useState, createContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = getAuth();

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsAuthenticated(true);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await loginRequest(email, password);
      setUser(userCredential.user);
      setIsLoading(false);
      setIsAuthenticated(true);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      setError(e.code.slice(5));
    }
  };

  const onRegister = async (email, password, repeatedPassword) => {
    try {
      setIsLoading(true);

      if (password !== repeatedPassword) {
        setError("Error: Passwords do not match");
        return;
      }

      const userCredential = await registerRequest(email, password);

      setUser(userCredential.user);
      setIsLoading(false);
      setIsAuthenticated(true);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      setError(e.code.slice(5));
    }
  };

  const onLogout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      setIsAuthenticated(false);
      setIsLoading(false);
      setUser(null);
    } catch (error) {
      setIsLoading(false);
      console.error("Error with signout: ", error);
    }
  };

  const onUpdate = (photo) => {
    updateProfile(auth.currentUser, {
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        console.error("Failed to update user: ", error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        error,
        setError,
        onLogin,
        onRegister,
        onLogout,
        onUpdate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
