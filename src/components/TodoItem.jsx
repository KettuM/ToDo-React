import PropTypes from 'prop-types';

function TodoItem({ todo }) {
  return (
    <div>
      <input
        type="checkbox"
      />
      {todo.todo}
    </div>
    
  );
}

TodoItem.propTypes = {
    todo: PropTypes.string.isRequired
};

export default TodoItem;