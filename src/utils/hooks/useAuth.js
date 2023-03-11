import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

export function usePageAuth(redirectIfNotConnected = false) {
  const [pageLoading, setPageLoading] = useState(true);
  const { isConnected, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Accès à une page selon l'authentification de l'utilisateur
  useEffect(() => {
    if (!redirectIfNotConnected) {
      if (isConnected) {
        setPageLoading(false);
      } else {
        setTimeout(() => logOut(), 750);
      }
    } else {
      if (!isConnected) {
        setPageLoading(false);
      } else {
        setTimeout(() => navigate("/compte-sanc+am"), 750);
      }
    }
  }, []);

  return { pageLoading, setPageLoading };
}
