/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/fakeAuthContext";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) navigate("/");
  }, [isAuthorized, navigate]);

  return isAuthorized ? children : null;
}
