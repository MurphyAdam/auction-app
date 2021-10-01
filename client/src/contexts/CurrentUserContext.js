import React, { useState, useContext, createContext } from "react";
import { loginService } from "../services/auth-api";

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [key, setKey] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState({error: false, message: null});
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = params => {
    setIsLoading(true);
    loginService(params)
    .then((response) => {
        if (response.status === 200) {
            setCurrentUser(response.data.user);
            setKey(response.data.key);
            setIsAuthenticated(true);
        }
        return response;
    }).catch(error => {
        setError({error: true, message: error});
    }).finally(() => {
        setIsLoading(false);
    })
  }

  const context = { key, currentUser, isAuthenticated, isLoading, error, loginUser }

  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(CurrentUserContext)