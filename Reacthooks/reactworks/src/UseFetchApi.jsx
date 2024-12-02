import React, { useState } from 'react';

function UseFetchApi() {
  const [data, setData] = useState([]);

  function getData() {
    console.log("Inside getData");
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data.recipes);
        setData(data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>UseFetchApi</h1>
      {data.map((ele) => (
        <div style={{color:'white',padding:'20px',backgroundColor:'red',margin:'100px',}}>
          <div>{ele.name}</div>
          <div>
            <img src={ele.image} alt={ele.name} height={100} width={100} />
          </div>
          <div>{ele.ingredients}</div>
        </div>
      ))}
      <button onClick={getData}>Get Menu</button>
    </div>
  );
}

export default UseFetchApi;
