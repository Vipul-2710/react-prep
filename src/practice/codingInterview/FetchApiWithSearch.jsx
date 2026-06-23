import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchApiWithSearch() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.data;
      setTodos(data);
    }
    getData();
  }, []);

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    function handleInputFilter() {
      const todoList = [...todos];

      const filteredTodoList = todoList.filter((item) =>
        item.title.includes(searchVal),
      );

      setFilteredTodos(filteredTodoList);
    }
    handleInputFilter();
  }, [searchVal]);

  return (
    <div>
      <h1>FetchApiWithSearch</h1>
      <div>
        <input type="text" onChange={handleInput} />
      </div>
      {searchVal == "" ? (
        <>
          {todos && todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
        </>
      ) : (
        <>{filteredTodos && filteredTodos.map((todo) => <div key={todo.id}>{todo.title}</div>)}</>
      )}
    </div>
  );
}

export default FetchApiWithSearch;
