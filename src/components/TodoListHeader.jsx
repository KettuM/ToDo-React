import PropTypes from 'prop-types';

function TodoListHeader({ header }) {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
}

TodoListHeader.propTypes = {
  header: PropTypes.string.isRequired,
};

export default TodoListHeader;