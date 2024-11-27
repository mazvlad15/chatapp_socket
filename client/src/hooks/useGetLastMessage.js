import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetLastMessage = () => {
  const [loading, setLoading] = useState(false);
  const [lastMessages, setLastMessages] = useState([]);

  useEffect(() => {
    const getLastMessage = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/messages/last/message");
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        setLastMessages(response.data);  
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getLastMessage();
  }, [setLastMessages]);

  return { loading, lastMessages };
};

export default useGetLastMessage;
