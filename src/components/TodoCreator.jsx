import { useState } from "react";
import PropTypes from 'prop-types';

function TodoCreator({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
}

TodoCreator.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoCreator;