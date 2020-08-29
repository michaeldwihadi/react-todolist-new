import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, index }) => {
  return (
    <div className="todo">
      <span className="todoSpan">{text}</span>
      <button className="deleteButton">Delete</button>
      <button className="editButton">Done</button>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Todo;
