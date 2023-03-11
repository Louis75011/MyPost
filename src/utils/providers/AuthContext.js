import { useState, useEffect, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ranks } from "../../data/constants/constants";
import decode from "jwt-decode";

export function tokenExists() {
  return !!localStorage.getItem("accessToken"); // booléen, si il y a le token
}

export function getTokenAccount() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    let decoded = decode(token);
    return decoded.sub;
  }
  return null;
}

function getTokenRank() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    let decoded = decode(token);
    let [rank] = decoded.auth;
    return rank;
  }
  return null;
}

export function getTokenIsLocalAdmin() {
  return getTokenRank() === ranks.LOCAL_ADMIN;
}

export function getTokenIsAdmin() {
  // get admin condition with the token without fetch
  return getTokenRank() === ranks.ADMIN;
}

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // App englobée selon la navigation de l'utilisateur authentifié
  const location = useLocation();
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(tokenExists());
  const [isLocalAdmin, setIsLocalAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const [accountBlocked, setAccountBlocked] = useState(false) // true = logOut

  useEffect(() => {
    const result = tokenExists();
    setIsConnected(result);
    setIsLocalAdmin(getTokenIsLocalAdmin());
    setIsAdmin(getTokenIsAdmin());
  }, [location.pathname]);

  function logOut() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("sessionRefreshStart");
    setIsConnected(false);
    setIsLocalAdmin(false);
    setIsAdmin(false);
    navigate("/");
  }

  function logOutErrorHandler(error) {
    if (error.message === "TOKEN_EXPIRED") {
      // Vérification de présence du token pour éliminer les multiples rapports d'erreur
      if (tokenExists()) {
        alert("Votre session est expirée");
        logOut();
      }
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        isConnected,
        setIsConnected,
        isLocalAdmin,
        setIsLocalAdmin,
        isAdmin,
        setIsAdmin,
        logOut,
        logOutErrorHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
