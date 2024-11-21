import React, { useEffect, useState } from 'react';

function UseFetchApi() {
    const[data,setData]=useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return <div>UseFetchApi
    {JSON.stringify(data)}
  </div>;
}

export default UseFetchApi;
