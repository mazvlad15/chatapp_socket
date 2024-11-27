import { useState } from "react";
import { useAuthContext } from "../context/AuthContect";
import axios from "axios";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthState } = useAuthContext();

  const logout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthState(null);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
