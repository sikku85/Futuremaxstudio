import React, { createContext, useState } from 'react';
import axios from 'axios';

// Step 1: Define centralized data
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {



    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] =useState(false);


    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('https://deepak-backend.vercel.app/api/v1/upload/allimages');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setIsLoading(false);
    };






  // Provide the centralized data and methods to the components
  return (
    <AppContext.Provider value={{ images,fetchImages,isLoading,setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
