import React, { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState({
    bugun: [],
    ertaga: [],
    keyin: [],
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value.trim().length == "") {
      alert("input value is empty");
    } else if (/\bugun\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        bugun: [...prevTodos.bugun, { text: value, completed: false }],
      }));
    }
    if (/\ertaga\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        ertaga: [...prevTodos.ertaga, { text: value, completed: false }],
      }));
    } else if (/\keyin\b/i.test(value)) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        keyin: [...prevTodos.keyin, { text: value, completed: false }],
      }));
    } else {
      setTodos((prevTodos) => ({
        ...prevTodos,
        bugun: [...prevTodos.bugun, { text: value, completed: false }],
      }));
    }
    setValue("");
  };

  const toggleTodo = (category, index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos[category]];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return {
        ...prevTodos,
        [category]: updatedTodos,
      };
    });
  };

  return (
    <div>
      <div className="container">
        <div className="todolist">
          <div>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
          </div>
          <div>
            <h3>Bugun:</h3>
            <ol>
              {todos.bugun.map((todo, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo("bugun", index)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3>Ertaga:</h3>
            <ol>
              {todos.ertaga.map((todo, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo("ertaga", index)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3>Keyin:</h3>
            <ul>
              {todos.keyin.map((todo, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo("keyin", index)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
