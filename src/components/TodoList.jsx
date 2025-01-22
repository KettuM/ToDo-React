import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  // Fetch todos from localStorage
  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodoList) {
      setTodoList(savedTodoList);
    }
  }, []);

  // Update localStorage whenever the todoList changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todo) => {
    setTodoList((prevList) => [
      ...prevList,
      { id: uuid(), todo },
    ]);
  };
return (
    <div>
      <TodoCreator onAddTodo={addTodo} />
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoList;