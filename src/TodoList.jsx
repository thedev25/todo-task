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
    if (value.trim().length == "") {
      alert('input value is empty');
    } 
    else if (/\btoday\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        today: [...prevTodos.today, value],
      }));
    }

    else if (/\btomorrow\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        tomorrow: [...prevTodos.tomorrow, value],
      }));
    }

   else if (/\bthen\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        then: [...prevTodos.then, value],
      }));
    }

    else {
      setTodos((prevTodos) => ({
        ...prevTodos,
        today: [...prevTodos.today, value],
      }));
    }
    setValue("");
  }

  return (
    <div>
    <div  className='container' >
        <div className="todolist">
        <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <h3>Today:</h3>
        <ul>
          {todos.today.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Tomorrow:</h3>
        <ul>
          {todos.tomorrow.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Then:</h3>
        <ul>
          {todos.then.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;