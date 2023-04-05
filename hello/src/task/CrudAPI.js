import React, { useState, useEffect } from 'react';

const CrudAPI = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      setItems(json);
    };
    fetchData();
  }, []);

  const addItem = async () => {
    if (input !== '') {
      const newItem = {
        title: input,
        completed: false,
      };
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      const json = await response.json();
      setItems([...items, json]);
      setInput('');
    }
  };

  const updateItem = async () => {
    if (editIndex !== null && input !== '') {
      const updatedItem = { ...items[editIndex], title: input };
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${updatedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      const json = await response.json();
      const newItems = [...items];
      newItems[editIndex] = json;
      setItems(newItems);
      setInput('');
      setEditIndex(null);
    }
  };

  const deleteItem = async (index) => {
    const itemId = items[index].id;
    await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
      method: 'DELETE',
    });
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>CRUD API Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {editIndex === index ? (
              <input value={input} onChange={(e) => setInput(e.target.value)} />
            ) : (
              <>
                <h2>{item.title}</h2>
                <p>{item.completed ? 'Completed' : 'Incomplete'}</p>
              </>
            )}
            <button onClick={() => setEditIndex(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
            {editIndex === index ? (
              <button onClick={updateItem}>Save</button>
            ) : (
              <button disabled={input === ''} onClick={addItem}>
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudAPI;
