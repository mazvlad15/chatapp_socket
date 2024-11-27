import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetAllUsers = () => {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoadingUsers(true);
      try {
        const response = await axios.get("/api/users");
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        setUsers(response.data);
      } catch (error) {
        setError(error?.response?.data?.message);
      } finally {
        setLoadingUsers(false);
      }
    };
    getUsers();
  }, []);

  return { loadingUsers, users, error };
};

export default useGetAllUsers;
