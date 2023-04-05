import React, { useState, useEffect } from 'react';

const API = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default API;
