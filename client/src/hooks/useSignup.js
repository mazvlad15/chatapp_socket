import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContect";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setAuthState} = useAuthContext();

  const signup = async (inputs) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/signup", inputs);
      setIsLoading(false);

      if (response.data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(response.data));
      setAuthState(response.data);

      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
