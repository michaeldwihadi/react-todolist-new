import React from "react";
import PropTypes from "prop-types";

import ItemList from "../itemlist/ItemList";

const Todo = ({ todos }) => {
  return (
    <div className="todoData">
      {todos.map((todoItem, index) => {
        return <ItemList key={index} text={todoItem.text} index={index} />;
      })}
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Todo;
