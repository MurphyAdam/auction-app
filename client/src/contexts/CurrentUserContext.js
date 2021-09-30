import React, { useState, useContext, createContext } from "react";
import { fetchCurrentUserService } from "../services/auth-api";

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState({error: false, message: null});
  const [isLoading, setIsLoading] = useState(false);

  const loadCurrentUser = () => {
    setIsLoading(true);
    fetchCurrentUserService()
    .then((response) => {
        if (response.status === 200) {
            setCurrentUser(response.data);
            setIsAuthenticated(true);
        }
        return response;
    }).catch(error => {
        setError({error: true, message: error});
    }).finally(() => {
        setIsLoading(false);
    })
  }

  const context = { currentUser, isAuthenticated, isLoading, error, loadCurrentUser }

  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUser = () => useContext(CurrentUserContext)