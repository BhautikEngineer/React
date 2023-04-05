import React, { useState, useEffect } from 'react';

const APItry = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => console.log(data));

  return (
    <>
      {/* <h1>API Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default APItry;
