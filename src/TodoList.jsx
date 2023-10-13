import React, { useState } from 'react';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState({
    today: [],
    tomorrow: [],
    then: []
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleAdd = () => {
    if (/\btoday\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        today: [...prevTodos.today, value],
      }));
    }

    if (/\btomorrow\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        tomorrow: [...prevTodos.tomorrow, value],
      }));
    }

    if (/\bthen\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        then: [...prevTodos.then, value],
      }));
    }

    setValue("");
  }

  return (
    <div>
    <div  className='container' >
        <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <h2>Today:</h2>
        <ul>
          {todos.today.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Tomorrow:</h2>
        <ul>
          {todos.tomorrow.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Then:</h2>
        <ul>
          {todos.then.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default TodoList;