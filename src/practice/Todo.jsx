import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInput = (event) => {
    let result = event.target.value;
    setTodo(result);
  };
  const handleSubmit = () => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setTodo(todoList[index]);
  };

  const saveEdit = () => {
    const newList = [...todoList];
    newList[editIndex] = todo;
    setTodoList(newList);
    setEditIndex(null);
    setTodo("");
  };

  const handleDelete = (deleteIndex) => {
    const newList = [...todoList];
    newList.splice(deleteIndex, 1);
    setTodoList(newList);
  };

  return (
    <>
      <h1>Welome to Todo List</h1>
      <input type="text" value={todo} onChange={() => handleInput(event)} />
      <br />
      {editIndex !== null ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <button onClick={handleSubmit}>Add Todo</button>
      )}
      <br /> <br />
      {todoList &&
        todoList.map((element, index) => (
          <div key={index}>
            <h4>
              {element}
              <button
                onClick={() => {
                  handleEdit(index);
                }}
              >
                Edit
              </button>{" "}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </h4>
          </div>
        ))}
    </>
  );
}

export default Todo;
