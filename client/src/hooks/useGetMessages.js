import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [errorM, setErrorM] = useState(null);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getAllMessages = async () => {
      setLoading(true);
      console.log(selectedConversation._id);
      try {
        const response = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        setMessages(response.data);
      } catch (error) {
        setErrorM(error?.response?.data?.error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getAllMessages();
  }, [selectedConversation._id, setMessages]);

  return { messages, loading, errorM };
};

export default useGetMessages;
