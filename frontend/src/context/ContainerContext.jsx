import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const FrontContainer = createContext();

export const ContainerProvider = ({ children }) => {

  const [container, setContainer] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContainer = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/containers`);
      setContainer(res.data);
    } catch (error) {
      console.error("Failed to fetch Container", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadContainer = async (formData) => {
  try {
    const token = localStorage.getItem('token');

const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/containers/add`,
  formData,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  }
);

    

    fetchContainer(); 
    } catch (error) {
      if (error.response?.status === 403) {
        window.location.href = '/login';
      } else {
        console.log(error);
        alert("Upload failed");
        // window.location.href = '/login';
      }
    }
  };


  useEffect(() => {
    fetchContainer();
  }, []);

  return (
    <FrontContainer.Provider value={{ container, loading, uploadContainer }}>
      {children}
    </FrontContainer.Provider>
  );
};

export const useContainer = () => useContext(FrontContainer);
