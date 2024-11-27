import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const [err, setErr] = useState(null);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        {message}
      );
      if (response.data.error) {
        throw new Error(response.data.error);
      }

      setMessages([...messages, response.data]);
    } catch (error) {
      setErr(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, err };
};

export default useSendMessage;
