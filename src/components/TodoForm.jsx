import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addItem }) => {
  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please Fill In !");
      return;
    }

    if (value.length > 45) {
      alert("Please create a shorter to do item text !");
      setValue("");
      return;
    }

    addItem(value);
    setValue("");
  };

  return (
    <div className="todoForm">
      <form action="" onSubmit={formSubmitHandler}>
        <input
          type="text"
          className="inputForm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submitButton">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
