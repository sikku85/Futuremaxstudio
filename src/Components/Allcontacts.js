import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Allcontacts = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get('https://deepak-backend.vercel.app/api/v1/upload/allsubmitfoam');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div style={{position:"relative" , textAlign:"center"}}>
      {data.map((item) => (
        <div key={item._id} >
            <div>{item.name} <br /><span>{item.email}</span></div>
        </div>
      ))}
    </div>
  );
};
