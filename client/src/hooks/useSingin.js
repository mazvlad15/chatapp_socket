import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContect";
import { data } from "react-router-dom";

const useSingin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuthState } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      setIsLoading(false);
      if (response.data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(response.data));
      setAuthState(response.data);

      return response.data;
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

export default useSingin;
